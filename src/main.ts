import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 설정
  app.enableCors({
    origin: 'https://hwavis.vercel.app', // React 앱의 주소
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // 인증 정보(쿠키 등) 허용
  });

  await app.listen(8080);
}

bootstrap();