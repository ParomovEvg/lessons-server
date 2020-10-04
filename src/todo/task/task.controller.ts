import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TaskEntity } from './task.entity';
import { TaskService } from './task.service';

@Crud({
  model: {
    type: TaskEntity,
  },
})
@Controller('todo/task')
export class TaskController implements CrudController<TaskEntity> {
  constructor(public service: TaskService) {}
}
