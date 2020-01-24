import { Request, Response } from 'express';
import { Game } from '../models/game';
import { GlobalParameter } from '../models/globalParameter';
import PlayerManager from '../shared/PlayerManager';
import GameManager from '../shared/GameManager';
import ParameterManager from '../shared/ParameterManager';

const PLimit = {
  temperature: 8,
  oxygen: 14,
  oceans: 0
}

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
    console.log(PLimit[globalParameter])
    if(!globalParameter || PLimit[globalParameter] === undefined) {
      res.status(400).json({ error: `Unrecognized global parameter. 'globalParameter' must be either 'oxygen', 'temperature', or 'oceans'` })
      return; 
    }
    if(!gameName || !player) {
      res.status(400).json({ error: `Request did not contain necessary params; 'gameName', 'globalParameter', and 'player'` })
      return
    }
    const id = await GameManager.getGameIdByName(gameName)
    const curVal = (await ParameterManager.getParam(globalParameter, id)).value;
    const limit = PLimit[globalParameter]
    let delta = steps ? Math.abs(steps) : (globalParameter === "temperature" ? 2 : 1);
    if(globalParameter === "oceans") {
      delta = (curVal + delta >= limit ? delta : limit);
    } else {
      delta = (curVal + delta <= limit ? delta : limit - curVal);
    }
    await PlayerManager.addTr(player, id, delta)
    res.status(200).json({ globalParameter, value: curVal + delta })
  } catch(e) {
    next(e);
  }
}

export default {
  getGlobalParameter,
  advanceGlobalParameter
}