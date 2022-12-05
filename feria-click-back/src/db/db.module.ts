import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { DbController } from './db.controller';

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
    providers: [DbService],
    controllers: [DbController],
})
export class DbModule {}
