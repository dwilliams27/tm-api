/* eslint-disable camelcase */
import { GlobalParameter } from '../models/globalParameter'
import Formatter from './Formatter'
import { Mods } from './FType'
const m = Formatter.m

export default {
  async createParams (game_id: number) {
    await GlobalParameter.create({ param: 'oxygen', value: 0, game_id })
    await GlobalParameter.create({ param: 'temperature', value: -30, game_id })
    await GlobalParameter.create({ param: 'oceans', value: 9, game_id })
  },
  async getParam (param: string, game_id: number) {
    return GlobalParameter.findOne({ where: { param, game_id } })
  },
  async modifyParameter (param: string, newValue: number, game_id: number) {
    const curVal = (await this.getParam(param, game_id)).value
    console.log(`Global Parameter ${m(param, Mods.YELLOW)}: ${m(curVal, Mods.GREEN)} => ${m(newValue, Mods.GREEN)}`)
    return GlobalParameter.update<GlobalParameter>({ param, value: newValue, game_id: game_id }, { where: { param, game_id } })
  }
}
