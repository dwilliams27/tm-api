import { Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Game } from './game'

@Table
export class Turn extends Model<Turn> {
  @Column
  currentPlayer: string;

  @Column
  turnOrder: string;

  @ForeignKey(() => Game)
  @Column
  game_id: number;

  @BelongsTo(() => Game)
  game: Game;
}
