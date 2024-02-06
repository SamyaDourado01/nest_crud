import {
    IsNotEmpty,
    IsNumber
  } from 'class-validator';  
   
  export class CreateStateCityDto {
    
    @IsNotEmpty()
    @IsNumber()
    cityId: number;

    @IsNotEmpty()
    @IsNumber()
    stateId: number;

}