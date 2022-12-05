import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { homedir } from 'os';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
