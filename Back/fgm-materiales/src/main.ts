import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      "http://localhost:3000",
      "https://fgm-construcciones.vercel.app"
    ],
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('FGM Materiales de Construcción')
    .setDescription('API para Materiales de Construcción')
    .setVersion('2.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT ? Number(process.env.PORT) : 3001;
  await app.listen(port);

  console.log(
    `✅ Conexión con la base de datos establecida (manejada por NestJS).`,
  );
  console.log(`🚀 Servidor ejecutándose en http://localhost:${port}`);
  console.log(`📘 Swagger disponible en http://localhost:${port}/api`);
}
bootstrap();
