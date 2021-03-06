import { Turn } from '../../models/turn'
import Formatter from '../Formatter'
import Output from '../Output'
import { PlayerT } from '../types/PlayerT'
import { ActionT } from '../types/ActionT'
const m = Formatter.m

export default {
  async initialize (players: PlayerT[], game_id: number) {
    if (!players || !game_id) {
      return null
    }
    let turnOrder = ''
    players.map(player => { turnOrder += `${player}#` })
    await Turn.create({ currentPlayer: players[0].name, turnOrder })
    Output.log(`Player ${m(players[0].name, Output.YELLOW)} turn`)
  },
  async getTurnOrder (game_id: number) {
    const turns = await (await Turn.findOne({ where: { game_id } })).turnOrder
    const turnOrder = turns.split('#')
    return turnOrder.slice(0, turnOrder.length - 2)
  },
  async addPlayer (name: string, game_id: number) {
    const curTurnOrder = this.getTurnOrder(game_id)
    return Turn.update<Turn>({ turnOrder: curTurnOrder }, { where: { game_id } })
  },
  async isTurn (name: string, game_id: number) {
    const curPlayer = (await Turn.findOne({ where: { game_id } })).currentPlayer
    return name === curPlayer
  },
  async takeAction (player: string, action: ActionT, game_id: number) {
    if (!this.isTurn(player, game_id)) {
      return { error: `It is not ${m(player, Output.YELLOW)}'s turn` }
    }
    const curActions = (await Turn.findOne({ where: { game_id } })).actions
    if (curActions < 1) {
      return { error: `Player ${m(player, Output.YELLOW)} is out of actions` }
    }
    Output.log(`Action ${m(action, Output.BLUE)} taken by ${m(player, Output.YELLOW)} turn`)
    return Turn.update<Turn>({ actions: curActions - 1 }, { where: { game_id } })
  },
  async passToWho (player: string, generation: number, game_id: number) {
    if (!player || !game_id) {
      return null
    }
    const turnOrder = (await Turn.findOne({ where: { game_id } })).turnOrder
    let who = turnOrder[0]
    if (generation % 2 === 0) {
      for (let i = 0; i < turnOrder.length; i++) {
        if (turnOrder[i] === player) {
          who = (i + 1 >= turnOrder.length) ? who : turnOrder[i + 1]
          break
        }
      }
    } else {
      who = turnOrder[turnOrder.length - 1]
      for (let i = turnOrder.length - 1; i >= 0; i--) {
        if (turnOrder[i] === player) {
          who = (i - 1 < 0) ? who : turnOrder[i - 1]
          break
        }
      }
    }
    return who
  }
}
