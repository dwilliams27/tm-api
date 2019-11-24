import { Table, Model, Column, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Game } from './game';

@Table
export class GlobalParameter extends Model<GlobalParameter> {
  @Column
  param: string;

  @Column
  value: number;

  @ForeignKey(() => Game)
  @Column
  game_id: number;

  @BelongsTo(() => Game)
  game: Game;
}