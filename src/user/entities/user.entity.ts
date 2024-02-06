import { Transform } from 'class-transformer';
import * as moment from 'moment';
import { StateCity } from 'src/modules/state_city/entities/state_city.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length:  50})
  name: string;

  @Transform(({ value }) => moment(value).format('DD/MM/YYYY'))
  @Column({type: 'date'})
  birthday: Date

  @Column({ type: 'enum', enum: ['masculino', 'feminino', 'outros'] })
  gender: string;

  @ManyToOne(type => StateCity, (stateCity) => stateCity.users)
  stateCity: StateCity

}
