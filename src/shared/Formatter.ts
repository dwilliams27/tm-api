import { Mods } from './FType'

export default {
  m (message: any, mod: Mods) {
    switch (mod) {
      case Mods.GREEN:
        return `\x1b[92m${message}\x1b[0m`
      case Mods.RED:
        return `\x1b[91m${message}\x1b[0m`
      case Mods.YELLOW:
        return `\x1b[93m${message}\x1b[0m`
      case Mods.BOLD:
        return `\x1b[1m${message}\x1b[0m`
      default:
        return message
    }
  }
}
