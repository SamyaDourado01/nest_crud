import {
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';  
   
  export class CreateCityDto {
    
    @IsString()
    @MinLength(4, { message: 'O nome deve ter pelo menos 4 caracteres.' })
    @IsNotEmpty()
    name: string;
}