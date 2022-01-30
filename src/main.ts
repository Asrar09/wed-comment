import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('process : ', process.env.PORT);
  console.log('process FULL : ', process.env);
  await app.listen(parseInt(process.env.PORT) || 3100);
}
bootstrap();
