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
	OutcomeTranslationECascadeGraph,
	OutcomeTranslationEId,
	OutcomeTranslationEOptionalId,
	OutcomeTranslationEUpdateProperties,
	OutcomeTranslationESelect,
	QOutcomeTranslation,
	QOutcomeTranslationQId,
	QOutcomeTranslationQRelation,
} from './translation/qoutcometranslation';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from './qpollrevision';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeESelect
    extends IEntitySelectProperties, OutcomeEOptionalId {
	// Non-Id Properties
	key?: string | IQStringField;
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parentTranslation?: OutcomeTranslationESelect;
	parent?: OutcomeESelect;
	children?: OutcomeESelect;
	pollRevisionsA?: PollRevisionESelect;
	pollRevisionsB?: PollRevisionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	key?: string | IQStringField;
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	parentTranslation?: OutcomeTranslationEOptionalId;
	parent?: OutcomeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations
	children?: OutcomeECascadeGraph;
	pollRevisionsA?: PollRevisionECascadeGraph;
	pollRevisionsB?: PollRevisionECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	KEY?: string | IQStringField;
	NAME?: string | IQStringField;
	PARENT_OUTCOME_TRANSLATION_ID?: number | IQNumberField;
	PARENT_OUTCOME_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeECreateProperties
extends Partial<OutcomeEId>, OutcomeEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeECreateColumns
extends OutcomeEId, OutcomeEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcome extends IQEntity
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	key: IQStringField;
	name: IQStringField;

	// Non-Id Relations
	parentTranslation: QOutcomeTranslationQRelation;
	parent: QOutcomeQRelation;
	children: IQOneToManyRelation<QOutcome>;
	pollRevisionsA: IQOneToManyRelation<QPollRevision>;
	pollRevisionsB: IQOneToManyRelation<QPollRevision>;

}


// Entity Id Interface
export interface QOutcomeQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QOutcomeQRelation
	extends IQRelation<QOutcome>, QOutcomeQId {
}

