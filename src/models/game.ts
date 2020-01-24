import { Table, Model, Column, HasMany } from 'sequelize-typescript'
import { Player } from './player'
import { GlobalParameter } from './globalParameter'

@Table
export class Game extends Model<Game> {
  @Column
  name: string;

  @HasMany(() => Player)
  players: Player[]

  @HasMany(() => GlobalParameter)
  parameters: GlobalParameter[]
}
