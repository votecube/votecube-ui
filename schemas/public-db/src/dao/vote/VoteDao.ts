import {DI}       from '@airport/di'
import {
	IVote,
	Poll_Key
}                 from '@votecube/model'
import {VOTE_DAO} from '../../diTokens'

export interface IVoteDao {

	findMyVoteForPoll(
		pollKey: Poll_Key
	): Promise<IVote>

	//
	// findVoteForPoll(
	// 	pollKey: Poll_Key,
	// 	email: string
	// ): Promise<IVoteDso>
	//
	// save(
	// 	vote: IVoteDso
	// ): Promise<void>

}

export class VoteDao
	implements IVoteDao {

	async findMyVoteForPoll(
		pollKey: Poll_Key
	): Promise<IVote> {
		// 	// const pollDao = await DI.get(POLL_DAO)
		//
		// 	// const poll = await pollDao.getOriginalDetails(pollId)
		// 	//
		// 	// if (!poll) {
		// 		return null
		// 	// }
		//
		return this.getDummy(
			// poll
		)
	}

	//
	// async findVoteForPoll(
	// 	pollId: Poll_Key,
	// 	email: string
	// ): Promise<IVoteDso> {
	// 	return null
	//
	// 	// let a: QActor
	// 	// let u: QUser
	// 	// let v: QVote
	// 	// return await this.db.findOne.graph({
	// 	// 	from: [
	// 	// 		v = this.db.from,
	// 	// 		a = v.actor.innerJoin(),
	// 	// 		u = a.user.innerJoin()
	// 	// 	],
	// 	// 	select: {
	// 	// 		...this.db.duo.select.fields,
	// 	// 		factors: {}
	// 	// 	},
	// 	// 	where: and(
	// 	// 		v.poll.id.equals(pollId),
	// 	// 		u.uniqueId.equals(email)
	// 	// 	)
	// 	// })
	// }
	//
	// async save(
	// 	vote: IVoteDso
	// ): Promise<void> {
	// 	return
	// }
	//
	private getDummy(
		// poll: IPoll
	): IVote {
		return {
			// poll,
			1: {
				factorNumber: 1,
				outcome: 'A',
				value: 33
			},
			2: {
				factorNumber: 2,
				outcome: 'A',
				value: 34
			},
			3: {
				factorNumber: 3,
				outcome: 'B',
				value: 33
			}
		}
	}

}

DI.set(VOTE_DAO, VoteDao)
