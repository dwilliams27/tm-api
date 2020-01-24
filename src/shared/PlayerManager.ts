import { Player } from "../models/player";
import Formatter from "./Formatter";
import { Mods } from './FType';
const m = Formatter.m

export default {
  async getTr(name: string, game_id: number) {
    return (await Player.findOne({ where: { name, game_id } })).tr;
  },
  async addTr(name: string, game_id: number, amount?: number) {
    const curTr = await this.getTr(name, game_id)
    console.log(`Player ${m(name, Mods.YELLOW)}: (${m(curTr, Mods.GREEN)} TR) => (${m(curTr + (amount ? amount : 1), Mods.GREEN)} TR)`)
    return (await Player.update<Player>({ name, tr: curTr + (amount ? amount : 1), game_id: game_id }, { where: { name, game_id } }));
  }
}