import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule);
  await nestApp.listen(3000);
}
bootstrap();
