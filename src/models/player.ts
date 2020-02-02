import { Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Game } from './game'

@Table
export class Player extends Model<Player> {
  @Column
  name: string;

  @Column
  tr: number;

  @ForeignKey(() => Game)
  @Column
  game_id: number;

  @BelongsTo(() => Game)
  game: Game;
}
