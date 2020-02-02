import { Player } from '../../models/player'
import Formatter from '../Formatter'
import Output from '../Output'
const m = Formatter.m

export default {
  async getTr (name: string, game_id: number) {
    return (await Player.findOne({ where: { name, game_id } })).tr
  },
  async addTr (name: string, game_id: number, amount: number, level: number) {
    if (!amount) {
      return null
    }
    const curTr = await this.getTr(name, game_id)
    Output.log(`${m(name, Output.YELLOW)}: (${m(curTr, Output.ORANGE)} TR) => (${m(curTr + amount, Output.ORANGE)} TR)`, level)
    return Player.update<Player>({ name, tr: curTr + amount, game_id: game_id }, { where: { name, game_id } })
  },
  async createPlayer (name: string, id: number) {
    return Player.create({ name, tr: 20, game_id: id })
  }
}
