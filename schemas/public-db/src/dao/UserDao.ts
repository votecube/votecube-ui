import {container, DI} from '@airport/di'
import {
	IUser,
	User_Name
}           from '@votecube/model'
import {
	SCHEMA,
	USER_DAO
}           from '../diTokens'

export type Password = string

export interface IUserDao {

	signUp(
		username: User_Name,
		password: Password,
		user: IUser
	): Promise<void>

}

export class UserDao
	implements IUserDao {

	async signUp(
		username: User_Name,
		password: Password,
		user: IUser
	): Promise<void> {
		const schema = await container(this).get(SCHEMA)

		await schema.db.runTransaction(async (transaction) => {
			const userRef = schema.users.doc(user.key)
			const credRef = schema.users.creds(userRef).doc(user.key)

			await userRef.set({
				key: user.key,
				name: username
			})
			await credRef.set({
				hash: password,
				key: user.key,
				userKey: user.key
			})
		})
	}

}

DI.set(USER_DAO, UserDao)
