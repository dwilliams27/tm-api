import { Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Game } from './game'
import { Player } from './player'

@Table
export class Resource extends Model<Resource> {
  @Column
  type: string

  @Column
  value: number

  @Column
  production: number

  @ForeignKey(() => Game)
  @Column
  game_id: number

  @ForeignKey(() => Player)
  @Column
  player_id: number

  @BelongsTo(() => Player)
  player: Player
}
