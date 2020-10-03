import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Cat } from './entityes/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CatsService extends TypeOrmCrudService<Cat> {
  constructor(@InjectRepository(Cat) repo) {
    super(repo);
  }
}
