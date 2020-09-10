import { IPollDoc, IRevisionDoc, IRevisionListingDoc, Poll_Id, Revision_Id } from '@votecube/model';
import { ICollection, ISchema } from './common';
import { IVCDocumentReference } from './DocRef';
import { RootCollection } from './RootCollection';
export interface IPollDraftsCollection extends ICollection<Poll_Id, IPollDoc> {
    pollRevisionListings(keyOrReference: Poll_Id | IVCDocumentReference<Poll_Id, IPollDoc>): ICollection<Revision_Id, IRevisionListingDoc, Poll_Id, IPollDoc>;
    pollRevisions(keyOrReference: Poll_Id | IVCDocumentReference<Poll_Id, IPollDoc>): ICollection<Revision_Id, IRevisionDoc, Poll_Id, IPollDoc>;
}
export declare class PollDraftsCollection extends RootCollection<Poll_Id, IPollDoc> implements IPollDraftsCollection {
    constructor(schema: ISchema);
    pollRevisionListings(keyOrReference: Poll_Id | IVCDocumentReference<Poll_Id, IPollDoc>): ICollection<Revision_Id, IRevisionListingDoc, Poll_Id, IPollDoc>;
    pollRevisions(keyOrReference: Poll_Id | IVCDocumentReference<Poll_Id, IPollDoc>): ICollection<Revision_Id, IRevisionDoc, Poll_Id, IPollDoc>;
}
