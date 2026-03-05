import {
  dataSourceOptions,
  DEFAULT_CONNECTION,
} from 'src/config/database.config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DEFAULT_CONNECTION,
    useFactory: async () => {
      const dataSource = new DataSource(dataSourceOptions);
      if (!dataSource.isInitialized) {
        await dataSource.initialize();
      }
      return dataSource;
    },
  },
];
