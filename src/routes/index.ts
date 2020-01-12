import globalParameter from './globalParameter';
import game from './game';
import * as express from 'express';

export class Routes {
  public useRoutes(app: express.Application) {
    app.use('/globalParameters', globalParameter);
    app.use('/game', game);
  }
}