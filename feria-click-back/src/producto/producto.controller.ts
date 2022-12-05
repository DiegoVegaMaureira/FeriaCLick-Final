import { Controller, Get } from '@nestjs/common';

@Controller('producto')
export class ProductoController {

    @Get()
    getProductos(){
        return null //arreglo
    }
}
