import { Controller, Get } from '@nestjs/common';
import { RepositoriosService } from './repositorios.service';

@Controller('repositorios')
export class RepositoriosController {
    constructor(private readonly repositorioService: RepositoriosService) {}

    @Get("csharp")
    async pegaRepositoriosCSharp() {
        return await this.repositorioService.pegaRepositoriosCSharp();
    }
}
