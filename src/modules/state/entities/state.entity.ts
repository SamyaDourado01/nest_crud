import { StateCity } from "src/modules/state_city/entities/state_city.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class State {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany( type => StateCity, stateCity  => stateCity.state)
    stateCities: StateCity[];
} 
