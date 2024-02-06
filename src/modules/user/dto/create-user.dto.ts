import {
    IsDate,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
  } from 'class-validator';
  
   
  export class CreateUserDto {
    @IsString()
    @MinLength(4, { message: 'O nome deve ter pelo menos 4 caracteres.' })
    @IsNotEmpty()
    name: string;   
  
    @IsNotEmpty()
    @IsDate()
    birthday: Date;

    @IsInt()
    age: number;
  
    @IsString()
    @IsEnum(['masculino', 'feminino', 'outros'])
    gender: string;

    @IsNumber()
    @IsNotEmpty()
    stateCity: number;

}