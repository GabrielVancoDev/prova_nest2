// Implemente um código onde tinha os métodos de Login, criação e Consulta de Usuários.
// Ele deve conter o método de autenticação
// deverá realizar a liberação do CORS
// Deverá ter a documentação de todos os end-points existentes no sistema
// Deverá ser implementado através de serviços
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Cors
  app.enableCors();
  await app.listen(3000);

  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
bootstrap();
