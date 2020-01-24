/* eslint-disable camelcase */
import { GlobalParameter } from '../models/globalParameter'
import Formatter from './Formatter'
import Output from './Output'
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
  async modifyParameter (param: string, newValue: number, game_id: number, level?: number) {
    const curVal = (await this.getParam(param, game_id)).value
    Output.log(`${m(param, Output.BOLD)}: ${m(curVal, Output.GREEN)} => ${m(newValue, Output.GREEN)}`, level)
    return GlobalParameter.update<GlobalParameter>({ param, value: newValue, game_id: game_id }, { where: { param, game_id } })
  }
}
