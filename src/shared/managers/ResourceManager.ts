import { ResourcesT } from '../types/ResourcesT'
import { Resource } from '../../models/resource'
import Formatter from '../Formatter'
import Output from '../Output'
import { PlayerT } from '../types/PlayerT'
import PlayerManager from './PlayerManager'
const m = Formatter.m

export default {
  async initializePlayers (players: PlayerT[], game_id: number) {
    for (const player of players) {
      this.createResourcesForPlayer(player.name, game_id)
    }
  },
  async createResourcesForPlayer (player: string, game_id: number) {
    for (const resource in ResourcesT) {
      const player_id = await PlayerManager.getPlayerId(player, game_id)
      await Resource.create({ type: resource, value: 0, production: 0, player_id, game_id })
    }
  }
}
