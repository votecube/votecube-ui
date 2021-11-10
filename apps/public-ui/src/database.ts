import {
    ICubeEventListener,
    MUTATION_API
} from '@votecube/cube-logic'
import {
    ICubeLogic,
    pageTitle,
    SITUATION_MANAGER,
    SOLUTION_MANAGER
} from '@votecube/vc-logic'
import type {
    IUiSolution,
    IUiSituation
} from '@votecube/model';

// import {APP_CONTAINER} from './container'

export async function init() {
    // await APP_CONTAINER.get(AIR
    // const dbManager = await APP_CONTAINER.get(DATABASE_MANAGER)
    // await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}

export async function setupCubeView(
    hostingPlatform: string,
    repositoryUuId: string,
    cubeLogic: ICubeLogic,
    cubeEventListener: ICubeEventListener,
    container
): Promise<{
    situation: IUiSituation,
    solution: IUiSolution
}> {
    const [
        mutationApi, situationManager, solutionManager
    ] = await container.get(
        MUTATION_API, SITUATION_MANAGER, SOLUTION_MANAGER)

    const solution = await solutionManager.getSolutionForSituation(
        repositoryUuId
    );

    const situation = await situationManager.getSituation(hostingPlatform, repositoryUuId)

    cubeEventListener.setPositionData(solution)
    await mutationApi.recompute()
    const setPositionDataAndMove = (solution) => cubeEventListener.setPositionDataAndMove(solution)
    setPositionDataAndMove(solution)

    pageTitle.set(situation.name)

    return {
        situation,
        solution
    }
}
