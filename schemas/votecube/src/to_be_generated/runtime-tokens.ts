import { APPLICATION_LOADER } from '@airport/apron'
import { API_REGISTRY } from '@airport/check-in'
import { APPLICATION_INITIALIZER, TERMINAL_STORE } from '@airport/terminal-map'
import { ApplicationLoader } from './ApplicationLoader'
import { IDEA_RATING_API, votecube } from './common-tokens'
import { IIdeaDao, IdeaDao, ISituationIdeaDao, SituationIdeaDao } from "../dao/dao";
import { AGREEMENT_API, IDEA_API, SITUATION_IDEA_API } from './common-tokens'
import { AgreementApi, IdeaApi, SituationIdeaApi } from '../api/api'
import { AgreementDao } from '../dao/AgreementDao'
import { AgreementReasonDao } from '../dao/AgreementReasonDao'
import { ReasonDao } from '../dao/ReasonDao'
import { IdeaRatingApi } from '../api/IdeaRatingApi'
import { IdeaRatingDao, IIdeaRatingDao } from '../dao/IdeaRatingDao'
import { REQUEST_MANAGER } from '@airport/arrivals-n-departures'

export const AGREEMENT_DAO = votecube.token<AgreementDao>({
    class: AgreementDao,
    interface: 'AgreementDao',
    token: 'AGREEMENT_DAO'
})
export const AGREEMENT_REASON_DAO = votecube.token<AgreementReasonDao>({
    class: AgreementReasonDao,
    interface: 'AgreementReasonDao',
    token: 'AGREEMENT_REASON_DAO'
})
export const IDEA_DAO = votecube.token<IIdeaDao>({
    class: IdeaDao,
    interface: 'IIdeaDao',
    token: 'IDEA_DAO'
})
export const IDEA_RATING_DAO = votecube.token<IIdeaRatingDao>({
    class: IdeaRatingDao,
    interface: 'IIdeaRatingDao',
    token: 'IDEA_RATING_DAO'
})
export const REASON_DAO = votecube.token<ReasonDao>({
    class: ReasonDao,
    interface: 'ReasonDao',
    token: 'REASON_DAO'
})
export const SITUATION_IDEA_DAO = votecube.token<ISituationIdeaDao>({
    class: SituationIdeaDao,
    interface: 'IIdeaSituationDao',
    token: 'SITUATION_IDEA_DAO'
})

AGREEMENT_API.setClass(AgreementApi)
AGREEMENT_API.setDependencies({
    agreementDao: AGREEMENT_DAO,
    agreementReasonDao: AGREEMENT_REASON_DAO,
    ideaDao: IDEA_DAO,
    reasonDao: REASON_DAO,
    situationIdeaDao: SITUATION_IDEA_DAO
})
IDEA_API.setClass(IdeaApi)
IDEA_API.setDependencies({
    ideaDao: IDEA_DAO
})
IDEA_RATING_API.setClass(IdeaRatingApi)
IDEA_RATING_API.setDependencies({
    ideaDao: IDEA_DAO,
    ideaRatingDao: IDEA_RATING_DAO,
    situationIdeaDao: SITUATION_IDEA_DAO
})
SITUATION_IDEA_API.setClass(SituationIdeaApi)
SITUATION_IDEA_API.setDependencies({
    agreementDao: AGREEMENT_DAO,
    agreementReasonDao: AGREEMENT_REASON_DAO,
    ideaDao: IDEA_DAO,
    reasonDao: REASON_DAO,
    requestManager: REQUEST_MANAGER,
    situationIdeaDao: SITUATION_IDEA_DAO
})
APPLICATION_LOADER.setClass(ApplicationLoader)
APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    terminalStore: TERMINAL_STORE,
})
