import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    
    return "";
  }
}
