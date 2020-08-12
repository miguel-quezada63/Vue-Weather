import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  await app.listen(3000);
}
bootstrap();
