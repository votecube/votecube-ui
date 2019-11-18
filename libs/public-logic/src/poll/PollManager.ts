import {
	container,
	DI
}                    from '@airport/di'
import {IFieldGroup} from '@votecube/forms'
import {
	IPollData,
	IPollDoc,
	IUser,
	IVariationData,
	IVariationDelta,
	IVariationDoc,
	IVote,
	Poll_Key,
	Theme_Id,
	Variation_Key
}                    from '@votecube/model'
import {
	DB_CONVERTER,
	DB_UTILS,
	POLL_DAO
}                    from '@votecube/public-db'
import {
	CUBE_LOGIC,
	LOGIC_UTILS,
	POLL_FORM_MANAGER,
	POLL_MANAGER
}                    from '../tokens'

export interface IPageVote
	extends IVote {
	changeMillis: number
}

export interface IPollManager {

	currentVariation: IStoredVariation

	getAllPolls(): Promise<IPollData[]>

	getVariation(
		pollKey: Poll_Key,
		variationKey: Variation_Key
	): Promise<IVariationData>

	mergeForm(): Promise<void>

	saveCurrentVariation(
		user: IUser
	): Promise<void>

}

export interface IStoredVariation {

	doc: IVariationDoc
	form?: IFieldGroup
	originalUi: IVariationData
	ui: IVariationData
	uiDelta?: IVariationDelta

}

export class PollManager
	implements IPollManager {

	private currVariation: IStoredVariation = {
		doc: null,
		form: null,
		originalUi: null,
		ui: null,
		uiDelta: null,
	}

	get currentVariation(): IStoredVariation {
		return this.currVariation
	}

	async getAllPolls(): Promise<IPollData[]> {
		const pollDao = await container(this).get(POLL_DAO)

		const pollDocs = await pollDao.getAll()

		return await this.convertPollDocs(pollDocs)
	}

	async getPollsForTheme(
		themeId: Theme_Id
	): Promise<IPollData[]> {
		const pollDao = await container(this).get(POLL_DAO)

		const pollDocs = await pollDao.getForTheme(themeId)

		return await this.convertPollDocs(pollDocs)
	}

	async getVariation(
		pollKey: Poll_Key,
		variationKey: Variation_Key
	): Promise<IVariationData> {
		if (!pollKey) {
			this.currVariation.doc = null

			return this.currVariation.ui
		}

		if (this.currVariation.ui
			&& this.currVariation.ui.pollKey === pollKey
			&& this.currVariation.ui.key === variationKey) {
			return this.currVariation.ui
		}

		const pollDao = await container(this).get(POLL_DAO)

		const doc = await pollDao.getVariation(pollKey, variationKey)

		const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS)

		const ui: any = dbConverter.fromDb(doc, dbUtils.subPollProps)

		const originalUi = dbUtils.copy(ui)

		this.currVariation = {
			doc,
			originalUi,
			ui
		}

		return ui
	}

	async mergeForm(): Promise<void> {
		const form = this.currVariation.form
		if (!form) {
			return
		}

		const [pollFormManager, logicUtils, dbUtils] = await container(this).get(
			POLL_FORM_MANAGER, LOGIC_UTILS, DB_UTILS)

		const ui: IVariationData       = pollFormManager.fromForm(form.value)
		const uiDelta: IVariationDelta = pollFormManager.fromForm(form.changeFlags)

		const oldUi = this.currVariation.ui

		if (oldUi) {
			logicUtils.overlay(oldUi, ui)
		} else {
			const cubeLogic = await container(this).get(CUBE_LOGIC)

			logicUtils.overlay({
				factors: cubeLogic.getPollFactorPositionDefault()
			}, ui)
		}
		if (oldUi) {
			logicUtils.copyProperties(oldUi, ui, dbUtils.subPollProps)
		}
		this.currVariation.ui      = ui
		this.currVariation.uiDelta = uiDelta
	}

	async saveCurrentVariation(
		user: IUser
	): Promise<void> {
		const originalUi = this.currVariation.originalUi
		const ui         = this.currVariation.ui
		const delta      = this.currVariation.uiDelta

		const [dbUtils, logicUtils] = await container(this).get(DB_UTILS, LOGIC_UTILS)

		logicUtils.setDeltas(originalUi, ui, delta)

		const dbConverter = await container(this).get(DB_CONVERTER)

		const dbObject = dbConverter.toVersionedDb(ui, delta,
			this.currVariation.doc, dbUtils.subPollProps)

		const pollDao = await container(this).get(POLL_DAO)

		await pollDao.save(dbObject, user)

		this.currVariation = {
			doc: null,
			form: null,
			originalUi: null,
			ui: null,
			uiDelta: null,
		}
	}

	private async convertPollDocs(
		pollDocs: IPollDoc[]
	): Promise<IPollData[]> {
		const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS)

		const pollData: IPollData[] = pollDocs.map(
			pollDoc => dbConverter.fromDb(pollDoc, dbUtils.subPollProps))

		return pollData
	}

}

DI.set(POLL_MANAGER, PollManager)
