import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [CatModule, DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
