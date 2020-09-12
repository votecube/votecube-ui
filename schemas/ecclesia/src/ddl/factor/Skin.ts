import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                               from '@airport/air-control'
import {CascadeType}       from '@airport/ground-control'
import {
	Skin_BackgroundColor,
	Skin_Id,
	Skin_TextColor
}                          from '../../types/factor/Skin'
import {ImmutableActorRow} from '../infrastructure/row/ImmutableActorRow'
import {PollRevision}      from '../poll/revision/PollRevision'
import {Factor}            from './Factor'

@Entity()
@Table({name: 'SKINS'})
export class Skin
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'SKIN_ID'})
	id: Skin_Id

	@Column({name: 'BACKGROUND_COLOR_ID', nullable: false})
	backgroundColor: Skin_BackgroundColor

	@Column({name: 'TEXT_COLOR_ID', nullable: false})
	textColor: Skin_TextColor

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_SKIN_ID',
		referencedColumnName: 'SKIN_ID'
	})
	parent: Skin

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: Skin[]

}
