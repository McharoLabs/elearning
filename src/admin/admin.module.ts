import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { UsersController } from './controllers/users.controller';
import { UsersService } from '@mcharolabs/elearning-core';

@Module({
  controllers: [AdminController, UsersController],
  providers: [AdminService, UsersService],
})
export class AdminModule {}
