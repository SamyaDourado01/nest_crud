import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateCity } from './entities/state_city.entity';
import { StateCityController } from './state_city.controller';
import { StateCityService } from './state_city.service';

@Module({
    imports: [TypeOrmModule.forFeature([StateCity])],
    controllers: [StateCityController],
    providers: [StateCityService]
})
export class StateCityModule {}
