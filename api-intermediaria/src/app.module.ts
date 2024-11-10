import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriosModule } from './repositorios/repositorios.module';

@Module({
  imports: [RepositoriosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
