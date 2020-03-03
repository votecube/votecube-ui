import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../../infrastructure/row/qsystemgeneratedrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface EmojiESelect extends SystemGeneratedRowESelect, EmojiEOptionalId {
    name?: string | IQStringField;
    cssClass?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface EmojiEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface EmojiEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface EmojiEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
    cssClass?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface EmojiECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface EmojiEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    EMOJI_NAME?: string | IQStringField;
    EMOJI_CSS_CLASS?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface EmojiECreateProperties extends Partial<EmojiEId>, EmojiEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface EmojiECreateColumns extends EmojiEId, EmojiEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QEmoji extends QSystemGeneratedRow {
    id: IQNumberField;
    name: IQStringField;
    cssClass: IQStringField;
}
export interface QEmojiQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QEmojiQRelation extends QSystemGeneratedRowQRelation<QEmoji>, QEmojiQId {
}
