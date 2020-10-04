import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task/task.entity';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TodoDataGeneratorService } from './todo-data-generator/todo-data-generator.service';
import { TaskListService } from './task-list/task-list.service';
import { TaskListController } from './task-list/task-list.controller';
import { TaskListEntity } from './task-list/task-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, TaskListEntity])],
  controllers: [TaskController, TaskListController],
  providers: [TaskService, TodoDataGeneratorService, TaskListService],
})
export class TodoModule {}
