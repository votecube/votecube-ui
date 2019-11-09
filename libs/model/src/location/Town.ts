import {Id}      from '../old/model'
import {ICounty} from './County'

export type TownId = Id

export const TOWNS = 'TOWNS'

export interface ITown {

	county: ICounty
	id: TownId
	name: string

}
