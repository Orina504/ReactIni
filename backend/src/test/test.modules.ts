import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ReactTest_DB',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test',
      entities: [],
      synchronize: false,
    })
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
