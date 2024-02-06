import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City) private readonly cityRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto){
    const city = new City();
    city.name = createCityDto.name;
    return this.cityRepository.save(city);
  }

  async findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  async findOne(id: number): Promise<City> {
    const found = await this.cityRepository.findOneBy({ id });
    
    if(!found) {
      throw new NotFoundException(`Cidade ${id} não encontrada.`)
    }
    return found;
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City> {
    const city = await this.findOne(id);
    city.name = updateCityDto.name;
    return this.cityRepository.save(city);
  }

  async remove(id: number): Promise<City> {
    const city = await this.findOne(id);  
    await this.cityRepository.delete(id);

    return city;
  }  
}
