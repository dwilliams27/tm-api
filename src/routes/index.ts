import parameter from './parameter'
import * as express from 'express'

export class Routes {
  public useRoutes(app: express.Application) {
    app.use('/globalParams', parameter)
  }
}