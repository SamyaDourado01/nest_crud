import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './modules/state/state.module';
import { CityteModule } from './modules/city/city.module';
import { StateCityModule } from './modules/state_city/state_city.module';
import { State } from './modules/state/entities/state.entity';
import { City } from './modules/city/entities/city.entity';
import { StateCity } from './modules/state_city/entities/state_city.entity';
import { User } from './modules/user/entities/user.entity';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'abcd123',
      username: 'postgres',
      entities: [User, State, City, StateCity],
      database: 'nest_crud',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    StateModule,
    CityteModule,
    StateCityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
