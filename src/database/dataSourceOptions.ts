import { CORE_ENTITIES } from '@mcharolabs/elearning-core';
import { databaseConfig } from 'src/config/database.config';
import { DataSourceOptions } from 'typeorm';

export const DEFAULT_CONNECTION = 'default';

type ExtendedDataSourceOptions = DataSourceOptions & {
  connectionLabel?: string;
  seeds?: string[];
  factories?: string[];
};

export const getConnections = (): ExtendedDataSourceOptions[] => [
  {
    connectionLabel: DEFAULT_CONNECTION,
    name: DEFAULT_CONNECTION,

    type: 'postgres',
    host: databaseConfig.host,
    port: databaseConfig.port,
    username: databaseConfig.username,
    password: databaseConfig.password,
    database: databaseConfig.database,
    entities: [...CORE_ENTITIES],
    synchronize: databaseConfig.synchronize,
    logging: databaseConfig.logging,
  },
];

export const getDefaultConnection = (): ExtendedDataSourceOptions => {
  const found = getConnections().find(
    (conn) => conn.connectionLabel === DEFAULT_CONNECTION,
  );
  if (!found) {
    throw new Error(`No connection found with label ${DEFAULT_CONNECTION}`);
  }
  console.log(found);
  return found;
};
