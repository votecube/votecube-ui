import { system } from "@airport/di";
import { ISituationApi } from "./api/SituationApi";
import { ISolutionApi } from "./api/SolutionApi";
import { ISituationDao } from "./dao/SituationDao";

export const votecube = system('votecube').lib('votecube')

export const SITUATION_API = votecube.token<ISituationApi>('ISituationApi')
export const SITUATION_DAO = votecube.token<ISituationDao>('ISituationDao')
export const SOLUTION_API = votecube.token<ISolutionApi>('ISolutionApi')
