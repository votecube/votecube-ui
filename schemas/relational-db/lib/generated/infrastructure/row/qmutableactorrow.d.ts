import { IQDateField, IQEntity } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from './qimmutableactorrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface MutableActorRowESelect extends ImmutableActorRowESelect, MutableActorRowEOptionalId {
    updatedAt?: Date | IQDateField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface MutableActorRowEId extends ImmutableActorRowEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface MutableActorRowEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface MutableActorRowEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    updatedAt?: Date | IQDateField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface MutableActorRowECascadeGraph extends ImmutableActorRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface MutableActorRowEUpdateColumns extends ImmutableActorRowEUpdateColumns {
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface MutableActorRowECreateProperties extends Partial<MutableActorRowEId>, MutableActorRowEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface MutableActorRowECreateColumns extends MutableActorRowEId, MutableActorRowEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QMutableActorRow extends QImmutableActorRow {
    updatedAt: IQDateField;
}
export interface QMutableActorRowQId extends QImmutableActorRowQId {
}
export interface QMutableActorRowQRelation<SubType extends IQEntity> extends QImmutableActorRowQRelation<QMutableActorRow>, QMutableActorRowQId {
}
