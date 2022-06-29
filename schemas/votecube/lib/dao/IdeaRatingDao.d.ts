import { User } from '@airport/travel-document-checkpoint';
import { BaseIdeaRatingDao, IBaseIdeaRatingDao } from "../generated/generated";
import { Idea, IdeaRating, SituationIdea } from '../ddl/ddl';
export interface IIdeaRatingDao extends IBaseIdeaRatingDao {
    findForSituationIdeaAndUser(situationIdea: SituationIdea | string, user: User | string): Promise<IdeaRating>;
    findForIdeaOnlyAndUser(idea: Idea | string, user: User | string): Promise<IdeaRating>;
}
export declare class IdeaRatingDao extends BaseIdeaRatingDao implements IIdeaRatingDao {
    findForSituationIdeaAndUser(situationIdea: SituationIdea | string, user: User | string): Promise<IdeaRating>;
    findForIdeaOnlyAndUser(idea: Idea | string, user: User | string): Promise<IdeaRating>;
}
//# sourceMappingURL=IdeaRatingDao.d.ts.map