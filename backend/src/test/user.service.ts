import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  async getTest(): Promise<string> {
    const result = await this.userRepository.findOne({where: { id: 1 }});
    return result ? result.name : "none";
  }
}
