import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller("user")
export class UserController {
  constructor(private readonly testService: UserService) {}

  @Get("test")
  async getTest(): Promise<string> {
    return await this.testService.getTest();
  }
}
