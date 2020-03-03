import { IDatabase } from './Database';
/**
 * Naming conventions
 *
 * Keys are encoded for two reasons
 *
 * 1) To reduce the storage footprint
 * 2) Encoded in a still decipherable way for human analysis
 *
 * Only base64 characters are allowed with / and + being reserved as key prefixes
 *
 * Primary keys are always prefixed with /
 *
 * /R - repositoryId
 * /A - actorId
 * /I - recordId (?autogenerated?)
 *
 * Foreign keys are always prefixed with +.  Foreign keys reference tables in same or
 * other schemas
 *
 * Table names are represented by the first characters of every word in the table name
 *
 * Tft - reference to THE_FIRST_TABLE
 * Tft2 - reference to THE_FAR_TABLE
 *
 * (NOTE, table names and schema names cannot have the last word start with a number,
 * with words being separated by underscores)
 *
 * (this assumes that THE_FIRST_TABLE was defined above THE_FAR_TABLE, or in an earlier
 * version of the schema)
 *
 * Same for schema names, their acronyms are prefixed in front of the schema names
 *
 * MsTft - reference to MY_SCHEMA.THE_FIRST_TABLE
 *
 * Ms2Tft - reference to MORE_SCHEMA.THE_FIRST_TABLE
 *
 * Foreign key into another schema:
 * +RMs2Tft - MORE_SCHEMA.THE_FIRST_TABLE.repositoryId
 * +AMs2Tft - MORE_SCHEMA.THE_FIRST_TABLE.actorId
 * +IMs2Tft - MORE_SCHEMA.THE_FIRST_TABLE.recordId
 *
 * The rest of the columns use the same acronym convention, but without any prefixes
 *
 * mvfc - MY_VERY_FIRST_COLUMN
 * mvfc2 - MY_VERY_FAR_COLUMN
 *
 * (this assumes that MY_VERY_FIRST_COLUMN was defined above MY_VERY_FAR_COLUMN, or in an
 * earlier version of the schema)
 *
 * For server based schemas, the server id and foreign keys are stored separately, using
 * the same convention but with key prefixes starting with lowercase
 *
 * /pi - primary key POLL_ID (in POLLS table)
 * +piP - foreign key POLLS.POLL_ID
 *
 *
 * ?Does server id need to be stored separately from the actorRecordId?
 * ?Do we ever need both?
 *    No, though internally actorRecordId should always be used for joins, etc.
 * ?Does storing the actorRecordId cause more or fewer updates to IDB?
 *    Should be the exact same number of updates
 * ?Does changing the primary key of the record cause issues?
 *    Central server records should never be referenced in repositories UNTIL the
 *    server id is known.
 *    However,
 *    we could probably omit saving the server record ids in related tables,
 *    though if we ever start referencing child records in new tables that might
 *    cause issues (or at least require additional lookups, complicating update
 *    code).  So, it's probably a good idea to update all ids in all tables where
 *    they are referenced.
 *    Also, using actorRecordIds in URLs becomes problematic - you can't share those
 *    URLs and it becomes invalid after the id actorRecordId is updated.  A URL
 *    updating scheme can be used but past history cannot be replaced, so it's safer
 *    to keep the original id, in case it was in the the browser history and the user
 *    navigates back.
 * Overall answer:
 *  Yes, because of browser history.
 *
 *
 */
export declare class IndexedDB {
    open(name: string, version?: number, upgradeCallback?: any): Promise<IDatabase>;
}
