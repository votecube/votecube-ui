import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IIdea,
} from './idea';
import {
	ISituation,
} from '@sapoto/core';
import {
	IAgreement,
} from '../agreement/agreement';
import {
	IReason,
} from './reason';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituationIdea extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	agreementTotal?: number;
	numberOfAgreementRatings?: number;

	// Non-Id Relations
	idea?: IIdea;
	situation?: ISituation;
	agreements?: IAgreement[];
	reasons?: IReason[];

	// Transient Properties

	// Public Methods
	
}


