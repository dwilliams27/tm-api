import Mods from './Output'

export default {
  m (message: any, mod) {
    switch (mod) {
      case Mods.GREEN:
        return `\x1b[92m${message}\x1b[0m`
      case Mods.RED:
        return `\x1b[91m${message}\x1b[0m`
      case Mods.YELLOW:
        return `\x1b[93m${message}\x1b[0m`
      case Mods.ORANGE:
        return `\x1b[38;5;214m${message}\x1b[0m`
      case Mods.BLUE:
        return `\x1b[34m${message}\x1b[0m`
      case Mods.BOLD:
        return `\x1b[1m${message}\x1b[0m`
      default:
        return message
    }
  }
}
