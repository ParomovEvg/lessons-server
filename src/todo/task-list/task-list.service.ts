import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TaskListEntity } from './task-list.entity';

@Injectable()
export class TaskListService extends TypeOrmCrudService<TaskListEntity> {
  constructor(@InjectRepository(TaskListEntity) repo) {
    super(repo);
  }
}
