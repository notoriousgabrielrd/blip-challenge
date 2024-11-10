import { Module } from '@nestjs/common';
import { RepositoriosService } from './repositorios.service';
import { RepositoriosController } from './repositorios.controller';

@Module({
  providers: [RepositoriosService],
  controllers: [RepositoriosController]
})
export class RepositoriosModule {}
