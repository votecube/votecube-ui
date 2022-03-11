import { IIdea } from '@votecube/votecube';
import { IUiIdea } from '@votecube/model';
import { RepositoryRecordConverter } from '@votecube/ui-logic';
export interface IIdeaConverter {
    dbToUi(dbIdea: IIdea): IUiIdea;
    uiToDb(uiIdea: IUiIdea, dbIdea: IIdea): IIdea;
}
export declare class IdeaConverter extends RepositoryRecordConverter implements IIdeaConverter {
    dbToUi(dbIdea: IIdea): IUiIdea;
    uiToDb(uiIdea: IUiIdea, dbIdea: IIdea): IIdea;
    private getUiLabel;
    private getUiFactor;
    private getUiPosition;
    private getUiOutcome;
    private getUiLabels;
    private labelsToDb;
    private outcomeToDb;
    private ideaFactorPositionToDb;
    private factorToDb;
    private positionToDb;
}
//# sourceMappingURL=IdeaConverter.d.ts.map