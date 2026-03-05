import { CORE_ENTITIES } from '@mcharolabs/elearning-core';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';
dotenv.config();

export const DEFAULT_CONNECTION = 'default';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  name: DEFAULT_CONNECTION,

  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '1433', 10),

  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [...CORE_ENTITIES],
  synchronize: false,
  migrationsTableName: 'migrations',
  migrationsRun: false,
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  seeds: ['dist/database/seeds/*{.ts,.js}'],
  factories: ['dist/database/factories/**/*{.ts,.js}'],

  logging: process.env.NODE_ENV === 'development',
  namingStrategy: new SnakeNamingStrategy(),

  seedTracking: false,
  cache: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

dataSource.initialize();
