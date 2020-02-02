import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript'
import { Game } from './game'
import { Resource } from './resource'

@Table
export class Player extends Model<Player> {
  @Column
  name: string

  @Column
  tr: number

  @ForeignKey(() => Game)
  @Column
  game_id: number

  @HasMany(() => Resource)
  resources: Resource[]

  @BelongsTo(() => Game)
  game: Game
}
