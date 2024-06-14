import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { PokeResponse, Result } from './interfaces/poke-response.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    try {
      // Clean DB
      await this.pokemonModel.deleteMany({});

      // Get Pokemons
      const data = await this.http.get<PokeResponse>(
        `https://pokeapi.co/api/v2/pokemon?limit=850`,
      );

      const pokemons = this.parseDataPokemons(data.results);
      await this.pokemonModel.insertMany(pokemons);
      return 'Seed executed';
    } catch (error) {
      throw new BadRequestException('Bad Request');
    }
  }

  private parserString(name: string): string {
    return name.toLowerCase().trim();
  }

  private parseDataPokemons(pokemons: Result[]): CreatePokemonDto[] {
    return pokemons.map(({ url, name }) => {
      const urlSegments = url.split('/');

      return {
        name: this.parserString(name),
        no: Number(urlSegments[urlSegments.length - 2]),
      };
    });
  }
}
