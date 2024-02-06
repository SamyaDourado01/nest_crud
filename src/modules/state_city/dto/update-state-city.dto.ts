import { PartialType } from '@nestjs/mapped-types';
import { CreateStateCityDto } from './create-state-city.dto';

export class UpdateStateCityDto extends PartialType(CreateStateCityDto) {}
