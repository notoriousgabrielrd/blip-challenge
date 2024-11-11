import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RepositoriosService } from './repositorios.service';

@ApiTags('Repositórios')
@ApiBearerAuth()
@Controller('repositorios')
export class RepositoriosController {
  constructor(private readonly repositoriosService: RepositoriosService) {}

  @Get('csharp')
  @ApiResponse({ status: 200, description: 'Lista os repositórios em C# da organização Take.net.' })
  @ApiResponse({ status: 500, description: 'Erro ao buscar repositórios.' })
  async obterRepositoriosCSharp() {
    console.log("process.env.GITHUB_TOKEN> 2", process.env.GITHUB_TOKEN);
    return await this.repositoriosService.pegaRepositoriosCSharp();
  }
}
