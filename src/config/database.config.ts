import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { CORE_ENTITIES } from '@mcharolabs/elearning-core';
import * as dotenv from 'dotenv';

dotenv.config();

export const DEFAULT_CONNECTION = 'ELEARNING';

export const databaseConfig: DataSourceOptions = {
  type: 'postgres',

  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),

  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  entities: [...CORE_ENTITIES],

  namingStrategy: new SnakeNamingStrategy(),

  synchronize: false,

  migrationsTableName: 'migrations',

  migrations: ['dist/database/migrations/*.js'],

  logging: process.env.NODE_ENV === 'development',
};
