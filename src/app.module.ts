import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const USUARIO_SERVICE_HOST = process.env.USUARIO_SERVICE_HOST || '127.0.0.1';
const USUARIO_SERVICE_PORT = process.env.USUARIO_SERVICE_PORT || 3001;

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USUARIO_SERVICE',
        transport: Transport.TCP,
        options: {
          host: USUARIO_SERVICE_HOST,
          port: USUARIO_SERVICE_PORT as number,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
