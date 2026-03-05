import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDefaultConnection } from './database/dataSourceOptions';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AdminModule,
    TypeOrmModule.forRoot(getDefaultConnection()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
