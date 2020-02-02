import PlayerManager from '../shared/managers/PlayerManager'
import GameManager from '../shared/managers/GameManager'
import ParameterManager from '../shared/managers/ParameterManager'
import { GlobalParameter } from '../shared/types/GlobalParameter'

const PLimit = {
  temperature: 8,
  oxygen: 14,
  oceans: 0
}

async function getGlobalParameter (req, res, next) {
  try {
    const { gameName, globalParameter } = req.body
    if (!gameName || !globalParameter) {
      res.status(400).json({ error: 'Request did not contain both \'gameName\' and \'globalParameter\'' })
      return
    }
    const id = await GameManager.getGameIdByName(gameName)

    const parameter = ParameterManager.getParam(globalParameter, id)
    res.status(200).json(parameter)
  } catch (e) {
    next(e)
  }
}

async function advanceGlobalParameter (req, res, next) {
  try {
    const { gameName, globalParameter, player, steps } = req.body
    if (!globalParameter || PLimit[globalParameter] === undefined) {
      res.status(400).json({ error: 'Unrecognized global parameter. \'globalParameter\' must be either \'oxygen\', \'temperature\', or \'oceans\'' })
      return
    }
    if (!gameName || !player) {
      res.status(400).json({ error: 'Request did not contain necessary params; \'gameName\', \'globalParameter\', and \'player\'' })
      return
    }
    const id = await GameManager.getGameIdByName(gameName)
    const curVal = (await ParameterManager.getParam(globalParameter, id)).value
    const limit = PLimit[globalParameter]
    let trDelta = 0
    let delta = 0

    if (globalParameter === GlobalParameter.TEMPERATURE) {
      if (steps % 2 !== 0) {
        res.status(400).json({ error: 'Can only raise temperature in steps of 2' })
        return
      }
      delta = steps ? Math.abs(steps) : 2
    } else {
      delta = steps ? Math.abs(steps) : 1
    }

    if (globalParameter === GlobalParameter.OCEANS) {
      delta = (curVal - delta >= limit ? -delta : limit - curVal)
    } else {
      delta = (curVal + delta <= limit ? delta : limit - curVal)
    }

    trDelta = (globalParameter === GlobalParameter.TEMPERATURE) ? delta / 2 : Math.abs(delta)
    await ParameterManager.modifyParameter(globalParameter, curVal + delta, id, 0)
    await PlayerManager.addTr(player, id, trDelta, 1)
    res.status(200).json({ globalParameter, value: curVal + delta })
  } catch (e) {
    next(e)
  }
}

export default {
  getGlobalParameter,
  advanceGlobalParameter
}
