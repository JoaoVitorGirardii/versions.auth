import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      options: {
        host: HOST,
        port: PORT as number,
      },
      transport: Transport.TCP,
    },
  );
  await app.listen();
}

bootstrap().catch((error) => console.log('Error in project [AUTH]: ', error));
