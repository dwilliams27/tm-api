import { Game } from '../models/game';
import { GlobalParameter } from '../models/globalParameter'
import { Player } from '../models/player';
import randomWords from 'random-words';
import GameManager from '../shared/GameManager';

async function createGame (req, res, next) {
  try {
    const gameName = req.body.gameName ? req.body.gameName : randomWords()
    const exists = await Game.findAll({ where: { name: gameName } })
    if(exists.length > 0) {
      res.status(409).json({ error: `Failed to create game with name ${gameName} because a game with that name already exists` })
      return;
    }
    if(!req.body.players) {
      res.status(400).json({ error: `At least one player ({ name: xyz }) must be specified` })
      return;
    }
    const game = await GameManager.createGame(gameName)
    
    req.body.players.map(async (player, index) => {
      await Player.create({ name: player.name ? player.name : `Player${index + 1}`, tr: 0, game_id: game.id })
    })
    res.status(201).json(game);
  } catch (e) {
    next(e);
  }
}

export default {
  createGame
}