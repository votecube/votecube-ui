import { AirEntity } from '@airport/holding-pattern';
import { IdeaLabel } from './IdeaLabel';
import { SituationIdea } from './SituationIdea';
import { IdeaTopic } from './IdeaTopic';
import { IdeaRating } from './IdeaRating';
import { Agreement } from '../agreement/Agreement';
import { Reason } from './Reason';
export declare class Idea extends AirEntity {
    name: string;
    agreementShareTotal: number;
    numberOfAgreements: number;
    urgencyTotal: number;
    numberOfUrgencyRatings: number;
    parent: Idea;
    children: Idea[];
    ideaRatings: IdeaRating;
    agreements: Agreement[];
    reasons: Reason[];
    ideaLabels: IdeaLabel[];
    situationIdeas: SituationIdea[];
    ideaTopics: IdeaTopic[];
}
//# sourceMappingURL=Idea.d.ts.map