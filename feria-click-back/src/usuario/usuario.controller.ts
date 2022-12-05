import { UsuarioService } from './usuario.service';
import { Controller, Get } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService){

    }

    @Get()
    getUsuario() {
        return null
    }
}
