import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { homedir } from 'os';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'FeriaClick',
      entities:[

      ],
      synchronize: true
    })
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
