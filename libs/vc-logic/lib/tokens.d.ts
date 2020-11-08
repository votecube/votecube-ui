import { IAuth } from './Auth';
import { IConnectionManager } from './ConnectionManager';
import { IPollRevisionConverter } from './converter/PollRevisionConveter';
import { ILogicUtils } from './LogicUtils';
import { IDetailedCubeLogic } from './pages/components/poll/DetailedCubeLogic';
import { IFactorRankingLogic } from './pages/poll/info/FactorRankingLogic';
import { IPollFormLogic } from './pages/poll/info/PollFormLogic';
import { IPollMainLogic } from './pages/poll/info/PollMainLogic';
import { IPollFormManager } from './pages/poll/PollFormManager';
import { ICubeLogic } from './poll/CubeLogic';
import { IPollManager } from './poll/PollManager';
import { IVoteManager } from './poll/VoteManager';
import { IRoutes } from './Routes';
export declare const AUTH: import("@airport/di").IDiToken<IAuth>;
export declare const CUBE_LOGIC: import("@airport/di").IDiToken<ICubeLogic>;
export declare const DETAILED_CUBE_LOGIC: import("@airport/di").IDiToken<IDetailedCubeLogic>;
export declare const FACTOR_RANKING_LOGIC: import("@airport/di").IDiToken<IFactorRankingLogic>;
export declare const LOGIC_UTILS: import("@airport/di").IDiToken<ILogicUtils>;
export declare const POLL_FORM_LOGIC: import("@airport/di").IDiToken<IPollFormLogic>;
export declare const POLL_FORM_MANAGER: import("@airport/di").IDiToken<IPollFormManager>;
export declare const POLL_MAIN_LOGIC: import("@airport/di").IDiToken<IPollMainLogic>;
export declare const CONNECTION_MANAGER: import("@airport/di").IDiToken<IConnectionManager>;
export declare const POLL_MANAGER: import("@airport/di").IDiToken<IPollManager>;
export declare const VOTE_MANAGER: import("@airport/di").IDiToken<IVoteManager>;
export declare const POLL_REVISION_CONVERTER: import("@airport/di").IDiToken<IPollRevisionConverter>;
export declare const ROUTES: import("@airport/di").IDiToken<IRoutes>;
//# sourceMappingURL=tokens.d.ts.map