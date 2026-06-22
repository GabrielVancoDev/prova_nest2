// Implemente um código onde tinha os métodos de Login, criação e Consulta de Usuários.
// Ele deve conter o método de autenticação
// deverá realizar a liberação do CORS
// Deverá ter a documentação de todos os end-points existentes no sistema
// Deverá ser implementado através de serviços
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Cors
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
