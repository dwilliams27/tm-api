import { Game } from '../models/game';

export default {
  async getGameIdByName(name: string) {
    console.log(`Creating game ${name}`)
    return (await Game.findOne({ where: { name: name } })).id;
  }
}