import { Sequelize } from 'sequelize-typescript';
import { models } from './models';

const URI = 'postgres://SmartphoneSquad:SmartPhoneSquad@ep-raspy-bonus-37301265.eu-central-1.aws.neon.tech/neondb';

export const initDB = (): Sequelize => {
  return new Sequelize(
    URI, {
      models,
      dialectOptions: {
        ssl: true
      }
    }
  );
};
