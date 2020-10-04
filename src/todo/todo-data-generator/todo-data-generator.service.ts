import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from '../task/task.entity';
import { randomFrom } from '../../utils/mock/randomFrom';
import { addHours } from 'date-fns';
import { TaskListEntity } from '../task-list/task-list.entity';
import { repeatTimes } from '../../utils/mock/repeatTimes';

@Injectable()
export class TodoDataGeneratorService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
    @InjectRepository(TaskListEntity)
    private taskListRepository: Repository<TaskListEntity>,
  ) {}

  getTasks(n: number): TaskEntity[] {
    const tasks = [
      'Помыть полы',
      'Погладить кота',
      'Купить пельмени',
      'Записать видео на youtube',
      'Почистить кошачий туалет',
    ];
    const tasksList = [];
    for (let i = 0; i < n; i++) {
      const task = this.taskRepository.create();
      task.text = `
Нужно сделать то и то, так и так
  - ${randomFrom(...tasks)} 
  - ${randomFrom(...tasks)}
  - ${randomFrom(...tasks)} 
      `;
      task.title = `Задача № ${i + 1}`;
      task.isCompleted = randomFrom(true, false);
      task.isArchived = randomFrom(true, false);
      if (randomFrom(true, false)) {
        task.estimateDate = addHours(
          new Date(),
          randomFrom(5, 10, 20),
        ).toISOString();
      }
      tasksList.push(task);
    }
    return tasksList;
  }

  getTaskLists(n: number) {
    const lists: TaskListEntity[] = [];
    repeatTimes(n, (_, i) => {
      const list = this.taskListRepository.create();
      list.name = `Список задач ${i + 1}`;
    });
  }
}
