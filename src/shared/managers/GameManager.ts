import { Game } from '../models/game'
import Formatter from '../shared/Formatter'
import Output from './Output'
import ParameterManager from '../shared/ParameterManager'
import TurnManager from './TurnManager'
const m = Formatter.m

const gm = {
  async getGameIdByName (name: string) {
    return (await Game.findOne({ where: { name } })).id
  },
  async createGame (name: string, players: string[]) {
    Output.log(`Creating game ${m(name, Output.GREEN)}`, 0)
    const game = await Game.create({ name, generation: 1 })
    const gameId = await gm.getGameIdByName(name)
    await ParameterManager.createParams(gameId)
    await TurnManager.initialize(players, gameId)
    return game
  }
}

export default gm
