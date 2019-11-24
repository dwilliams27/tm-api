import App from './app';
import { sequelize } from './sequelize';
import * as models from './models';

const PORT = 3000;

(async () => {
  sequelize.addModels(models.list);
  await sequelize.sync({force: true});
  new App(PORT);
})();