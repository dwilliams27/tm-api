import { Game } from '../models/game'
import Formatter from '../shared/Formatter'
import { Mods } from '../shared/FType'
import ParameterManager from '../shared/ParameterManager'
const m = Formatter.m

export default {
  async getGameIdByName (name: string) {
    return (await Game.findOne({ where: { name } })).id
  },
  async createGame (name: string) {
    console.log(`Creating game ${m(name, Mods.GREEN)}`)
    const game = await Game.create({ name })
    await ParameterManager.createParams(module.exports.getGameIdByName(name))
    return game
  }
}
