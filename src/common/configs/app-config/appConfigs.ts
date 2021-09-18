import { config } from 'dotenv';
import { IAppConfig } from './interfaces';

config();

const initialise = () => {
  if (!process.env.PORT || Number.isNaN(Number(process.env.PORT))) {
    throw new Error('PORT is not defined');
  }

  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
  }
};

const configs: IAppConfig = {
  PORT: Number(process.env.PORT),
  DATABASE_URL: process.env.DATABASE_URL!
};

export { initialise, configs };
