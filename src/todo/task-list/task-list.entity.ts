import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TaskEntity } from '../task/task.entity';

@Entity()
export class TaskListEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(
    type => TaskEntity,
    task => task.list,
  )
  tasks?: TaskEntity[];
}
