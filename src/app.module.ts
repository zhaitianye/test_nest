import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { PigsModule } from './pigs/pigs.module';

@Module({
  imports: [CatModule, DogsModule, PigsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
