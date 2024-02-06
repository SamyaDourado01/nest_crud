import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/user/entities/user.entity";
import { City } from "src/modules/city/entities/city.entity";
import { State } from "src/modules/state/entities/state.entity";

@Entity()
export class StateCity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cityId: number;

    @Column()
    stateId: number;

    @ManyToOne(type => City, (city) => city.stateCities)
    city: City;

    @ManyToOne(type => State, (state) => state.stateCities)
    state: State;

    @OneToMany(type => User, (user) => user.stateCity)
    users: User[];
}