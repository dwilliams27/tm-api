import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize('postgres', 'postgres', 'docker', {
  dialect: 'postgres',
  //logging: console.log,
});