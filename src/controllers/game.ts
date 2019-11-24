import { Game } from '../models/game';

async function createGame (req, res, next) {
  try {
    const game = Game.create(req.body);
    res.status(201).json(game);
  } catch (e) {
    next(e);
  }
}

export default {
  createGame
}