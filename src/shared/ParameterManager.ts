import { GlobalParameter } from '../models/globalParameter';

export default {
  async getParam(param: string, game_id: number) {
    return (await GlobalParameter.findOne({ where: { param, game_id } }));
  },
  async modifyParameter(param: string, newValue: number, game_id: number) {
    console.log(`Setting ${param} to ${newValue} for game ${game_id}`)
    return (await GlobalParameter.update<GlobalParameter>({ param, value: newValue, game_id: game_id }, { where: { param, game_id } }));
  }
}