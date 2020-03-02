import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IEntityDatabaseFacade,
	IEntityFind,
	IEntityFindOne,
	IEntitySearch,
	IEntitySearchOne,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-control';
import {
	PollOpinionVersionECascadeGraph,
	PollOpinionVersionEId,
	PollOpinionVersionEOptionalId,
	PollOpinionVersionEUpdateProperties,
	PollOpinionVersionESelect,
	QPollOpinionVersion,
	QPollOpinionVersionQId,
	QPollOpinionVersionQRelation,
} from './qpollopinionversion';
import {
	PollFactorRevisionECascadeGraph,
	PollFactorRevisionEId,
	PollFactorRevisionEOptionalId,
	PollFactorRevisionEUpdateProperties,
	PollFactorRevisionESelect,
	QPollFactorRevision,
	QPollFactorRevisionQId,
	QPollFactorRevisionQRelation,
} from '../poll/revision/structure/qpollfactorrevision';
import {
	LanguageECascadeGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../infrastructure/qlanguage';
import {
	FactorOpinionVersionRatingECascadeGraph,
	FactorOpinionVersionRatingEId,
	FactorOpinionVersionRatingEOptionalId,
	FactorOpinionVersionRatingEUpdateProperties,
	FactorOpinionVersionRatingESelect,
	QFactorOpinionVersionRating,
	QFactorOpinionVersionRatingQId,
	QFactorOpinionVersionRatingQRelation,
} from './user/qfactoropinionversionrating';
import {
	FactorOpinionVersionTranslationECascadeGraph,
	FactorOpinionVersionTranslationEId,
	FactorOpinionVersionTranslationEOptionalId,
	FactorOpinionVersionTranslationEUpdateProperties,
	FactorOpinionVersionTranslationESelect,
	QFactorOpinionVersionTranslation,
	QFactorOpinionVersionTranslationQId,
	QFactorOpinionVersionTranslationQRelation,
} from './translation/qfactoropinionversiontranslation';
import {
	PositionOpinionVersionECascadeGraph,
	PositionOpinionVersionEId,
	PositionOpinionVersionEOptionalId,
	PositionOpinionVersionEUpdateProperties,
	PositionOpinionVersionESelect,
	QPositionOpinionVersion,
	QPositionOpinionVersionQId,
	QPositionOpinionVersionQRelation,
} from './qpositionopinionversion';
import {
	FactorOpinionVersionRatingCountECascadeGraph,
	FactorOpinionVersionRatingCountEId,
	FactorOpinionVersionRatingCountEOptionalId,
	FactorOpinionVersionRatingCountEUpdateProperties,
	FactorOpinionVersionRatingCountESelect,
	QFactorOpinionVersionRatingCount,
	QFactorOpinionVersionRatingCountQId,
	QFactorOpinionVersionRatingCountQRelation,
} from './count/qfactoropinionversionratingcount';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorOpinionVersionESelect
    extends IEntitySelectProperties, FactorOpinionVersionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollOpinionVersion?: PollOpinionVersionESelect;
	pollFactorRevision?: PollFactorRevisionESelect;
	language?: LanguageESelect;
	ratings?: FactorOpinionVersionRatingESelect;
	translations?: FactorOpinionVersionTranslationESelect;
	positions?: PositionOpinionVersionESelect;
	ratingCounts?: FactorOpinionVersionRatingCountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorOpinionVersionEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorOpinionVersionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorOpinionVersionEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollOpinionVersion?: PollOpinionVersionEOptionalId;
	pollFactorRevision?: PollFactorRevisionEOptionalId;
	language?: LanguageEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorOpinionVersionECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations
	ratings?: FactorOpinionVersionRatingECascadeGraph;
	translations?: FactorOpinionVersionTranslationECascadeGraph;
	positions?: PositionOpinionVersionECascadeGraph;
	ratingCounts?: FactorOpinionVersionRatingCountECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorOpinionVersionEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POLL_OPINION_VERSION_ID?: number | IQNumberField;
	POLL_FACTOR_REVISION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorOpinionVersionECreateProperties
extends Partial<FactorOpinionVersionEId>, FactorOpinionVersionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorOpinionVersionECreateColumns
extends FactorOpinionVersionEId, FactorOpinionVersionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorOpinionVersion extends IQEntity
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollOpinionVersion: QPollOpinionVersionQRelation;
	pollFactorRevision: QPollFactorRevisionQRelation;
	language: QLanguageQRelation;
	ratings: IQOneToManyRelation<QFactorOpinionVersionRating>;
	translations: IQOneToManyRelation<QFactorOpinionVersionTranslation>;
	positions: IQOneToManyRelation<QPositionOpinionVersion>;
	ratingCounts: IQOneToManyRelation<QFactorOpinionVersionRatingCount>;

}


// Entity Id Interface
export interface QFactorOpinionVersionQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorOpinionVersionQRelation
	extends IQRelation<QFactorOpinionVersion>, QFactorOpinionVersionQId {
}

