// Implemente um código onde tinha os métodos de Login, criação e Consulta de Usuários.
// Ele deve conter o método de autenticação
// deverá realizar a liberação do CORS
// Deverá ter a documentação de todos os end-points existentes no sistema
// Deverá ser implementado através de serviços

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    // Criação de Usuário
    return `Usuário Criado com Sucesso`;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
