import { Request, Response } from 'express';
import { Game } from '../models/game';
import { GlobalParameter } from '../models/globalParameter';
import PlayerManager from '../shared/PlayerManager';
import GameManager from '../shared/GameManager';
import ParameterManager from '../shared/ParameterManager';

async function getGlobalParameter(req, res, next) {
  try {
    const { gameName, globalParameter } = req.body;
    if(!gameName || !globalParameter) {
      res.status(400).json({ error: `Request did not contain both 'gameName' and 'globalParameter'` })
      return;
    }
    const id = await GameManager.getGameIdByName(gameName);

    const parameter = ParameterManager.getParam(globalParameter, id);
    res.status(200).json(parameter);
  } catch(e) {
    next(e);
  }
}

async function advanceGlobalParameter(req, res, next) {
  try {
    const { gameName, globalParameter, player, steps } = req.body;
    if(!gameName || !globalParameter || !player) {
      res.status(400).json({ error: `Request did not contain necessary params; 'gameName', 'globalParameter', and 'player'` })
      return
    }
    const id = await GameManager.getGameIdByName(gameName)

    switch(globalParameter) {
      case "oxygen":
        const curVal = (await ParameterManager.getParam(globalParameter, id)).value;
        const incBy = steps ? Math.abs(steps) : 1;
        if(curVal + incBy <= 14) {
          await ParameterManager.modifyParameter(globalParameter, curVal + incBy, id)
          await PlayerManager.addTr(player, id, incBy)
          res.status(200).json({ globalParameter, value: curVal + incBy })
        }
        break;
      case "temperature":
        // todo
        break;
      case "oceans":
        // todo
        break;
      default:
        res.status(400).json({ error: `Unrecognized global parameter. 'globalParameter' must be either 'oxygen', 'temperature', or 'oceans'` })
        return; 
    }
    await GlobalParameter.update<GlobalParameter>(req.body, { where: { game_id: req.body.gameName } });
  } catch(e) {
    next(e);
  }
}

export default {
  getGlobalParameter,
  advanceGlobalParameter
}