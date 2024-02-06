import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}


  async create(createUserDto: CreateUserDto){
    const user = new User();
    Object.assign(user, createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({relations: ["stateCity", "stateCity.state", "stateCity.city"]});
  }

  async findOne(id: number): Promise<User> {
    const found = await this.userRepository.findOne({ relations: ["stateCity","stateCity.state", "stateCity.city"], where: { id }});
    
    if(!found) {
      throw new NotFoundException(`Usuário ${id} não encontrado.`)
    }

    return found;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);   
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);  
    await this.userRepository.delete(id);

    return user;
  }  
}
