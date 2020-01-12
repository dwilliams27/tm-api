import { Game } from '../models/game';
import randomWords from 'random-words';

async function createGame (req, res, next) {
  try {
    console.log(`Create game: ${req.body}`);
    const gameName = req.body.name ? req.body.name : randomWords()
    const exists = await Game.findAll({ where: { name: gameName } })
    if(exists.length > 0) {
      res.status(409).json({ error: `Failed to create game with name ${gameName} because a game with that name already exists` })
      return;
    }
    let game = await Game.create({ name: gameName })
    res.status(201).json(game);
  } catch (e) {
    next(e);
  }
}

export default {
  createGame
}