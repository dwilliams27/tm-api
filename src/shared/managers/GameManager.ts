import { Game } from '../../models/game'
import Formatter from '../Formatter'
import Output from '../Output'
import ParameterManager from './ParameterManager'
import TurnManager from './TurnManager'
import { Player } from '../types/Player'
const m = Formatter.m

const gm = {
  async getGameIdByName (name: string) {
    return (await Game.findOne({ where: { name } })).id
  },
  async createGame (name: string, players: Player[]) {
    Output.log(`Creating game ${m(name, Output.GREEN)}`, 0)
    const game = await Game.create({ name, generation: 1 })
    const gameId = await gm.getGameIdByName(name)
    await ParameterManager.createParams(gameId)
    await TurnManager.initialize(players, gameId)
    return game
  }
}

export default gm
