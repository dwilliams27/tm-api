import { Game } from '../models/game'
import Formatter from '../shared/Formatter'
import Output from './Output'
import ParameterManager from '../shared/ParameterManager'
const m = Formatter.m

const gm = {
  async getGameIdByName (name: string) {
    return (await Game.findOne({ where: { name } })).id
  },
  async createGame (name: string) {
    Output.log(`Creating game ${m(name, Output.GREEN)}`, 0)
    const game = await Game.create({ name })
    await ParameterManager.createParams(await gm.getGameIdByName(name))
    return game
  }
}

export default gm
