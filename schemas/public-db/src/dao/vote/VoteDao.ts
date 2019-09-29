import {DI}      from '@airport/di'
import {
	POLL_DAO,
	VOTE_DAO
}                from '../../diTokens'
import {
	IPoll,
	IVote
}                from '../../generated/generated'
import {Poll_Id} from '../../types/poll/Poll'

export interface IVoteDao
	// extends IBaseVoteDao
{

	addTempForPoll(
		poll: IPoll,
		pollId?: Poll_Id
	): void

	findMyVoteForPoll(
		pollId: Poll_Id
	): Promise<IVote>

	findVoteForPoll(
		pollId: Poll_Id,
		email: string
	): Promise<IVote>

	save(
		vote: IVote
	): Promise<void>

}

export class VoteDao
	// extends BaseVoteDao
	implements IVoteDao {

	voteMap: { [id: string]: IVote } = {}

	addTempForPoll(
		poll: IPoll,
		pollId: Poll_Id = poll.id
	): void {
		const tempVote = this.getDummy(poll)

		this.voteMap[pollId] = tempVote
	}

	async findMyVoteForPoll(
		pollId: Poll_Id
	): Promise<IVote> {
		pollId = parseInt(pollId as any)
		if (!pollId && pollId !== 0) {
			return null
		}

		let vote = this.voteMap[pollId]
		if (vote) {
			return vote
		}

		const pollDao = await DI.get(POLL_DAO)

		const poll = await pollDao.findByIdWithDetails(pollId)

		vote = this.getDummy(poll)

		this.voteMap[pollId] = vote

		return vote
	}

	async findVoteForPoll(
		pollId: Poll_Id,
		email: string
	): Promise<IVote> {
		return null

		// let a: QActor
		// let u: QUser
		// let v: QVote
		// return await this.db.findOne.graph({
		// 	from: [
		// 		v = this.db.from,
		// 		a = v.actor.innerJoin(),
		// 		u = a.user.innerJoin()
		// 	],
		// 	select: {
		// 		...this.db.duo.select.fields,
		// 		factors: {}
		// 	},
		// 	where: and(
		// 		v.poll.id.equals(pollId),
		// 		u.uniqueId.equals(email)
		// 	)
		// })
	}

	async save(
		vote: IVote
	): Promise<void> {
		return
	}

	private getDummy(
		poll: IPoll
	): IVote {
		return {
			poll,
			x: {
				axis: 'x',
				dir: 1,
				value: 0
			},
			y: {
				axis: 'y',
				dir: 1,
				value: 100
			},
			z: {
				axis: 'z',
				dir: 1,
				value: 0
			}
		} as any
	}

}

DI.set(VOTE_DAO, VoteDao)
