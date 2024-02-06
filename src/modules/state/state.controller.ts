import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    Query,
    Patch,
  } from '@nestjs/common';
import { StateService } from '../state/state.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';


  
  @Controller('states')
  export class StateController {
    constructor(private readonly stateService: StateService) {}
  
  
    @Post()
    create(@Body() createStateDto: CreateStateDto) {
      return this.stateService.create(createStateDto);
    }
  
    @Get()
    findAll() {
      return this.stateService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.stateService.findOne(id);
    }

    @Get(':id/cities')
    findStateCities(@Param('id') id: number) {
      return this.stateService.findCities();
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() updateStateDto: UpdateStateDto) {
      return this.stateService.update(id, updateStateDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.stateService.remove(id);
    }
  
  }