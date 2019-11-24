import parameter from './parameter';
import game from './game';
import * as express from 'express';

export class Routes {
  public useRoutes(app: express.Application) {
    app.use('/globalParams', parameter);
    app.use('/game', game);
  }
}