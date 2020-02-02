import { Table, Model, Column, HasMany, HasOne } from 'sequelize-typescript'
import { Player } from './player'
import { GlobalParameter } from './globalParameter'
import { Turn } from './turn'

@Table
export class Game extends Model<Game> {
  @Column
  name: string

  @Column
  generation: number

  @HasOne(() => Turn)
  turn: Turn

  @HasMany(() => Player)
  players: Player[]

  @HasMany(() => GlobalParameter)
  parameters: GlobalParameter[]
}
