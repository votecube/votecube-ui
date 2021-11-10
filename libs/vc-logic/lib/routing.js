import { APP_CONTAINER } from './container';
import { ROUTES } from './tokens';
export const ABOUT = '/about';
export const FEEDBACK = '/feedback';
export const RELEASE_PLAN = '/releasePlan';
export const FACTOR_INFO_MAIN = '/factor/info/Main/:mode';
export const FACTOR_LIST = '/factor/List';
export const SITUATION_LIST = '/situation/List';
export const DERIVATION_LIST = '/derivation/List/:repositoryUuId';
export const SITUATION_FORM = '/situation/Form/:mode';
export const SITUATION_MAIN = '/situation/Main/:mode/:hostingPlatform/:repositoryUuId';
export const SITUATION_LOCATIONS = '/situation/Locations/:mode';
export const SITUATION_TIME_FRAME = '/situation/TimeFrame/:mode';
export const CARD_CLIMATE_CHANGE = '/card/ClimateChange';
export function navigateToPage(routePath, paramMap) {
    APP_CONTAINER.get(ROUTES).then(routes => {
        routes.navigateToPage(routePath, paramMap);
    });
}
//# sourceMappingURL=routing.js.map