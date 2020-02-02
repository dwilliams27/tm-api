import { Game } from '../models/game'
import randomWords from 'random-words'
import GameManager from '../shared/managers/GameManager'
import PlayerManager from '../shared/managers/PlayerManager'
import ResourceManager from '../shared/managers/ResourceManager'

async function createGame (req, res, next) {
  try {
    const gameName = req.body.gameName ? req.body.gameName : randomWords()
    const exists = await Game.findAll({ where: { name: gameName } })
    if (exists.length > 0) {
      res.status(409).json({ error: `Failed to create game with name ${gameName} because a game with that name already exists` })
      return
    }
    if (!req.body.players) {
      res.status(400).json({ error: 'At least one player ({ name: xyz }) must be specified' })
      return
    }
    const game = await GameManager.createGame(gameName, req.body.players)

    await req.body.players.map(async (player, index) => {
      await PlayerManager.createPlayer(player.name ? player.name : `Player${index + 1}`, game.id)
    })

    res.status(201).json(game)
  } catch (e) {
    next(e)
  }
}

export default {
  createGame
}
