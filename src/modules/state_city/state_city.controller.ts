import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
  } from '@nestjs/common';
import { StateCityService } from './state_city.service';
import { CreateStateCityDto } from './dto/create-state-city.dto';
import { UpdateStateCityDto } from './dto/update-state-city.dto';
  
  @Controller('states_cities')
  export class StateCityController {
    constructor(private readonly stateCityService: StateCityService) {}
  
  
    @Post()
    create(@Body() createStateCityDto: CreateStateCityDto) {
      return this.stateCityService.create(createStateCityDto);
    }
  
    @Get()
    findAll() {
      return this.stateCityService.findAll();
    }
      
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.stateCityService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() updateStateCityDto: UpdateStateCityDto) {
      return this.stateCityService.update(id, updateStateCityDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.stateCityService.remove(id);
    }
  
  }