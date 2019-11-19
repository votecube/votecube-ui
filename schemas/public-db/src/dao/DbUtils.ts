/*
export async function init() {
	await DI.get(AIR_DB)
	const dbManager = await DI.get(DATABASE_MANAGER)
	await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}
*/

import {DI}             from '@airport/di'
import {IMarked}        from '@votecube/model'
import * as elasticlunr from 'elasticlunr'
import {DB_UTILS}       from '../tokens'

export type FullTextSearchProperty = string
export type ExcludeFullTextSearchProperty = string

export interface IFullTextSearchObject {
	[propertyName: string]: boolean
}

export interface IDbUtils {

	addedProps: string[]
	excludedProps: string[]
	subPollProps: string[]
	versionedProps: string[]

	calculateWaterMarks(
		dbObject: IMarked
	): void

	copy(
		object,
		skipKeys?: string[]
	): any

	getFtsProps(
		object: any,
		excludeFtsProperties?: ExcludeFullTextSearchProperty[]
	): IFullTextSearchObject

}

export class DbUtils
	implements IDbUtils {

	static EXCLUDE_FTS_PROPS = [
		'createdAt', 'fts', 'key', 'rootVariationKey', 'userKey', 'x', 'y', 'z']

	private theElIndex: elasticlunr.Index<any>

	get addedProps(): string[] {
		return [
			'createdAt',
			'fts',
			'key',
			'marks',
			'userKey'
		]
	}

	get excludedProps(): string[] {
		return [
			'fts',
			'marks'
		]
	}

	get subPollProps(): string[] {
		return [
			...this.addedProps,
			...this.versionedProps,
			'pollKey',
			'rootVariationKey'
		]
	}

	get versionedProps(): string[] {
		return [
			'depth',
			'parent',
			'parentKey',
			'path'
		]
	}

	private get elIndex(): elasticlunr.Index<any> {
		if (!this.theElIndex) {
			this.theElIndex = elasticlunr(function () {
				this.addField('test' as unknown as never)
				this.setRef('id' as unknown as never)
			})
		}

		return this.theElIndex
	}

	calculateWaterMarks(
		dbObject: IMarked
	): void {
		const marks    = {
			change: {
				high: 0,
				low: Number.MIN_SAFE_INTEGER
			},
			same: {
				high: 0,
				low: Number.MAX_SAFE_INTEGER
			}
		}
		dbObject.marks = marks

		for (const key in dbObject) {
			if (this.subPollProps.indexOf(key) > -1) {
				continue
			}
			const childObject = dbObject[key]
			if (this.isDataObject(childObject)) {
				if (childObject.d === 0) {
					// Nothing to do, this is a brand new object
				} else if (childObject.d > 0) {
					marks.same.high = this.setHighSame(marks.same.high, childObject.d)
					marks.same.low  = this.setLowSame(marks.same.low, childObject.d)
				} else {
					marks.change.high = this.setHighChange(marks.change.high, childObject.d)
					marks.change.low  = this.setLowChange(marks.change.low, childObject.d)
				}
			} else {
				this.calculateWaterMarks(childObject)
				marks.same.high   = this.setHighSame(marks.same.high, childObject.marks.same.high)
				marks.same.low    = this.setLowSame(marks.same.low, childObject.marks.same.low)
				marks.change.high = this.setHighChange(marks.change.high, childObject.marks.change.high)
				marks.change.low  = this.setLowChange(marks.change.low, childObject.marks.change.low)
			}
		}
		if (marks.change.low === Number.MIN_SAFE_INTEGER) {
			marks.change.low = 0
		}
		if (marks.same.low === Number.MAX_SAFE_INTEGER) {
			marks.same.low = 0
		}
	}

	copy(
		object,
		skipKeys: string[] = ['marks']
	): any {
		let theCopy
		if (object instanceof Object) {
			if (object instanceof Array) {
				theCopy = object.map(
					arrayEntry => this.copy(arrayEntry, skipKeys))
			} else {
				theCopy = {}
				for (const propertyName in object) {
					if (skipKeys.indexOf(propertyName) > -1) {
						continue
					}
					theCopy[propertyName] = this.copy(object[propertyName], skipKeys)
				}
			}
		} else {
			theCopy = object
		}

		return theCopy
	}

	getFtsProps(
		object: any,
		excludeFtsProperties: ExcludeFullTextSearchProperty[]
			= DbUtils.EXCLUDE_FTS_PROPS
	): IFullTextSearchObject {
		const fts: IFullTextSearchObject = {}

		this.doGetFtsProps(object, excludeFtsProperties, fts)

		return fts
	}

	private doGetFtsProps(
		object: any,
		excludeFtsProperties: ExcludeFullTextSearchProperty[],
		fts: IFullTextSearchObject
	): void {
		if (object instanceof Object) {
			for (const propertyName in object) {
				if (excludeFtsProperties.indexOf(propertyName) === -1) {
					this.doGetFtsProps(object[propertyName], excludeFtsProperties, fts)
				}
			}
		} else {
			if (typeof object === 'string'
				&& excludeFtsProperties.indexOf(object) === -1) {
				const propTokens = this.elIndex.pipeline.run(elasticlunr.tokenizer(object))
				for (const token of propTokens) {
					fts[token] = true
				}
			}
		}
	}

	private setHighChange(
		aggregate: number,
		data: number
	): number {
		return data < aggregate ? data : aggregate
	}

	private setLowChange(
		aggregate: number,
		data: number
	): number {
		if (data < 0) {
			return data > aggregate ? data : aggregate
		}
		return aggregate
	}

	private setHighSame(
		aggregate: number,
		data: number
	): number {
		return data > aggregate ? data : aggregate
	}

	private setLowSame(
		aggregate: number,
		data: number
	): number {
		if (data > 0) {
			return data < aggregate ? data : aggregate
		}
		return aggregate
	}

	private isDataObject(
		object
	): boolean {
		return object.hasOwnProperty('v')
	}

}

DI.set(DB_UTILS, DbUtils)
