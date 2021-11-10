import { container, DI } from '@airport/di'
import {
	ISituation,
	ISolution,
	SolutionApiClient
} from '@votecube/votecube'
import { IUiRepositoryRecord, IUiSituation, IUiSolution } from '@votecube/model'
import {
	SOLUTION_MANAGER
} from '../tokens'
import { SITUATION_CONVERTER, SOLUTION_CONVERTER } from '..'

export interface ISolutionManager {

	getSolutionForSituation(
		// User-information is in AIRport
		situationRepositoryUuId: string
	): Promise<IUiSolution>

	saveSolution(
		situation: IUiSituation,
		solution: IUiSolution
	): Promise<void>

}

export class SolutionManager
	implements ISolutionManager {

	solutionApi = new SolutionApiClient()

	async getSolutionForSituation(
		// User-information is in AIRport
		situationRepositoryUuid: string
	): Promise<IUiSolution> {
		if (!situationRepositoryUuid || situationRepositoryUuid === 'unsolved') {
			return this.getStubSolution()
		}

		const solution = await this.solutionApi
			.getMySolutionForSituation(situationRepositoryUuid)

		const solutionConverter = await container(this).get(SOLUTION_CONVERTER)

		return solutionConverter.dbToUi(solution)
	}

	async saveSolution(
		situation: IUiSituation,
		solution: IUiSolution
	): Promise<void> {
		const [situationConverter, solutionConverter] = await container(this)
			.get(SITUATION_CONVERTER, SOLUTION_CONVERTER)

		const dbSituation = situationConverter.uiToDb(situation)

		const dbSolution = solutionConverter.uiToDb(
			solution, situation.ageSuitability, dbSituation)

		await this.solutionApi.saveSolution(dbSolution)
	}

	private getStubSolution(): IUiSolution {
		return {
			...this.getStubIds(),
			1: {
				...this.getStubIds(),
				factorNumber: 1,
				outcome: 'A',
				value: 33
			},
			2: {
				...this.getStubIds(),
				factorNumber: 2,
				outcome: 'A',
				value: 33
			},
			3: {
				...this.getStubIds(),
				factorNumber: 3,
				outcome: 'B',
				value: 34
			}
		}
	}

	private getStubIds(): IUiRepositoryRecord {
		return {
			actorId: null,
			// actorUuId: null,
			actorRecordId: null,
			ageSuitability: null,
			repositoryId: null,
			// repositoryUuId: null,
		}
	}

}

DI.set(SOLUTION_MANAGER, SolutionManager)
