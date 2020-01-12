import { Player } from "../models/player";

export default {
  async getTr(name: string, game_id: number) {
    return (await Player.findOne({ where: { name, game_id } })).tr;
  },
  async addTr(name: string, game_id: number, amount?: number) {
    // BROKEN ?
    const curTr = await this.getTr(name, game_id)
    console.log(`Adding ${amount ? amount : 1} tr to player ${name} in game ${game_id}`)
    return (await Player.update<Player>({ name, value: curTr + (amount ? amount : 1), game_id: game_id }, { where: { name, game_id } }));
  }
}