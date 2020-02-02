const Output = {
  GREEN: 'GREEN',
  RED: 'RED',
  YELLOW: 'YELLOW',
  ORANGE: 'ORANGE',
  BLUE: 'BLUE',
  BOLD: 'BOLD',
  log (message: string, level?: number) {
    console.log(`${' '.repeat(level)}${message}`)
  }
}
export default Output
