import { container, DI } from "@airport/di";
import {
    IUiAgreement,
    IUiAgreementFactor,
    AgreementFactor_Value
} from "@votecube/model";
import {
    IIdea,
    IIdeaFactorPosition,
    IAgreement,
    IAgreementFactor
} from "@votecube/votecube";
import { REPOSITORY_RECORD_CONVERTER } from '@votecube/ui-logic'
import { AGREEMENT_CONVERTER } from "../tokens";

export interface IAgreementConverter {

    dbToUi(
        dbAgreement: IAgreement
    ): IUiAgreement

    uiToDb(
        uiAgreement: IUiAgreement,
        ageSuitability: 0 | 7 | 13 | 18,
        idea: IIdea
    ): IAgreement

}

export class AgreementConverter
    implements IAgreementConverter {

    dbToUi(
        dbAgreement: IAgreement
    ): IUiAgreement {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        let agreementFactor1: IAgreementFactor
        let agreementFactor2: IAgreementFactor
        let agreementFactor3: IAgreementFactor
        for (const dbAgreementFactor of dbAgreement.factors) {
            switch (dbAgreementFactor.axis) {
                case 'x':
                    agreementFactor1 = dbAgreementFactor
                    break
                case 'y':
                    agreementFactor2 = dbAgreementFactor
                    break
                case 'z':
                    agreementFactor3 = dbAgreementFactor
                    break
            }
        }
        return {
            ...repositoryRecordConverter.dbToUi(dbAgreement),
            "1": this.agreementFactorDbToUi(agreementFactor1),
            "2": this.agreementFactorDbToUi(agreementFactor2),
            "3": this.agreementFactorDbToUi(agreementFactor3)
        }
    }

    private agreementFactorDbToUi(
        dbAgreementFactor: IAgreementFactor
    ): IUiAgreementFactor {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        return {
            ...repositoryRecordConverter.dbToUi(dbAgreementFactor),
            factorNumber: this.getFactorNumber(dbAgreementFactor.axis as 'x' | 'y' | 'z'),
            outcome: dbAgreementFactor.ideaFactorPosition.outcomeOrdinal as 'A' | 'B',
            value: dbAgreementFactor.share as AgreementFactor_Value
        }
    }

    private getFactorNumber(
        axis: 'x' | 'y' | 'z'
    ): 1 | 2 | 3 {
        switch (axis) {
            case 'x':
                return 1
            case 'y':
                return 2
            case 'z':
                return 3
            default:
                throw new Error(`Unsupported axis value: ${axis}`)
        }
    }

    uiToDb(
        uiAgreement: IUiAgreement,
        ageSuitability: 0 | 7 | 13 | 18 = 0,
        idea: IIdea,
    ): IAgreement {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        let factors: IAgreementFactor[] = []
        
        const dbAgreement: IAgreement = {
            idea,
            factors
        } as any

        repositoryRecordConverter.uiToDb(uiAgreement, dbAgreement, ageSuitability)

        for (const ideaFactorPosition of idea.ideaFactorPositions) {
            const uiAgreementFactor = uiAgreement[
                this.getFactorNumber(ideaFactorPosition.axis as 'x' | 'y' | 'z')]
            factors.push(this.agreementFactorUiToDb(uiAgreementFactor, ageSuitability,
                dbAgreement, ideaFactorPosition))
        }

        return dbAgreement
    }

    private agreementFactorUiToDb(
        uiAgreementFactor: IUiAgreementFactor,
        ageSuitability: 0 | 7 | 13 | 18 = 0,
        agreement: IAgreement,
        ideaFactorPosition: IIdeaFactorPosition,
    ): IAgreementFactor {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        
        const dbAgreementFactor: IAgreementFactor = {
            agreement,
            ideaFactorPosition
        } as any

        repositoryRecordConverter.uiToDb(uiAgreementFactor, dbAgreementFactor, ageSuitability)

        return dbAgreementFactor
    }

}
DI.set(AGREEMENT_CONVERTER, AgreementConverter)
