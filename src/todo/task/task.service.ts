import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TaskEntity } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService extends TypeOrmCrudService<TaskEntity> {
  constructor(@InjectRepository(TaskEntity) repo) {
    super(repo);
  }
}
