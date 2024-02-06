import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStateCityDto } from './dto/create-state-city.dto';
import { UpdateStateCityDto } from './dto/update-state-city.dto';
import { StateCity } from './entities/state_city.entity';

@Injectable()
export class StateCityService {
  constructor(
    @InjectRepository(StateCity) private readonly stateCityRepository: Repository<StateCity>,
  ) {}

  async create(createStateCityDto: CreateStateCityDto){
    const stateCity = new StateCity();
    Object.assign(stateCity, createStateCityDto);
    return this.stateCityRepository.save(stateCity);
  }

  async findAll(): Promise<StateCity[]> {
    return this.stateCityRepository.find();
  }

  async findOne(id: number): Promise<StateCity> {
    const found = await this.stateCityRepository.findOneBy({ id });
    
    if(!found) {
      throw new NotFoundException(`O ${id} não foi encontrado.`)
    }
    return found;
  }

  async update(id: number, updateStateCityDto: UpdateStateCityDto): Promise<StateCity> {
    const stateCity = await this.findOne(id);
    stateCity.cityId = updateStateCityDto.cityId;
    stateCity.stateId = updateStateCityDto.stateId;
    return this.stateCityRepository.save(stateCity);
  }

  async remove(id: number): Promise<StateCity> {
    const stateCity = await this.findOne(id);  
    await this.stateCityRepository.delete(id);

    return stateCity;
  }  
}
