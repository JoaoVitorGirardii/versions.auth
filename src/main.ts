import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      options: {
        host: '127.0.0.1',
        port: 3001,
      },
      transport: Transport.TCP,
    },
  );
  await app.listen();
}

bootstrap().catch((error) => console.log('Error in project [AUTH]: ', error));
