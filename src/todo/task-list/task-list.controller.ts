import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TaskListEntity } from './task-list.entity';
import { TaskListService } from './task-list.service';

@Crud({
  model: {
    type: TaskListEntity,
  },
})
@Controller('todo/task-list')
export class TaskListController implements CrudController<TaskListEntity> {
  constructor(public service: TaskListService) {}
}
