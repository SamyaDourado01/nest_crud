import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './entities/state.entity';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { City } from '../city/entities/city.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State) private readonly stateRepository: Repository<State>,
  ) {}

  async create(createStateDto: CreateStateDto){
    const state = new State();
    state.name = createStateDto.name;
    return this.stateRepository.save(state);
  }

  async findAll(): Promise<State[]> {
    return this.stateRepository.find();
  }

  async findOne(id: number): Promise<State> {
    const found = await this.stateRepository.findOneBy({ id });
    
    if(!found) {
      throw new NotFoundException(`Estado ${id} não encontrado.`)
    }
    return found;
  }

  async findCities(): Promise<City[]> {
    return this.stateRepository.find({ relations: { stateCities: true} });
  }

  async update(id: number, updateStateDto: UpdateStateDto): Promise<State> {
    const state = await this.findOne(id);
    state.name = updateStateDto.name;
    return this.stateRepository.save(state);
  }

  async remove(id: number): Promise<State> {
    const state = await this.findOne(id);  
    await this.stateRepository.delete(id);

    return state;
  }  
}
