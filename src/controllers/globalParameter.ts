import { Request, Response } from 'express';
import { Game } from '../models/game';

async function getGlobalParameter(req, res, next) {
  try {
    if(!req.gameName || !req.parameter) {
      res.status(400).json({ error: `Request did not contain both 'gameName' and 'parameter'` })
      return;
    }
    const game = Game.findAll({ where: { name: req.body.gameName } })
  } catch(e) {
    next(e);
  }
}

export default {
  getGlobalParameter
}