import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from 'src/entity/service.entity';
import { ServiceProvider } from 'src/entity/serviceProvider.entity';

import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'abirnupur6@gmail.com',
          pass: 'cglznzbjcarpgtpa',
        },
      },
    }),
    TypeOrmModule.forFeature([Service, ServiceProvider]),
  ],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
