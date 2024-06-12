import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(
      'mongodb://admin:admin@localhost:27717/nest-pokemon?authSource=admin&directConnection=true',
    ),
    PokemonModule,
  ],
})
export class AppModule {}
