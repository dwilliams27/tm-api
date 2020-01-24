import express from 'express'
import { Routes } from './routes'
import * as bodyParser from 'body-parser'

class App {
  public app: express.Application = express();
  public routes: Routes = new Routes();
  public PORT: number;

  constructor (port: number) {
    this.PORT = port
    this.setupApi()
  }

  private setupApi (): void {
    this.app.use(bodyParser.urlencoded({
      extended: true
    }))
    this.app.use(bodyParser.json())
    this.app.listen(this.PORT, () => {
      console.log(`\n----- Api listening on ${this.PORT} -----`)
    })
    this.routes.useRoutes(this.app)
  }
}

export default App
