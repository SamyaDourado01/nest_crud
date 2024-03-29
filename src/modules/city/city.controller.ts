import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
  } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

  
  @Controller('cities')
  export class CityController {
    constructor(private readonly cityService: CityService) {}
  
  
    @Post()
    create(@Body() createCityDto: CreateCityDto) {
      return this.cityService.create(createCityDto);
    }
  
    @Get()
    findAll() {
      return this.cityService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.cityService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() updateCityDto: UpdateCityDto) {
      return this.cityService.update(id, updateCityDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.cityService.remove(id);
    }
  
  }