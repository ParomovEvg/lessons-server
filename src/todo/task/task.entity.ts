import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { TaskListEntity } from '../task-list/task-list.entity';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  text: string;

  @Column()
  isArchived: boolean;

  @Column()
  isCompleted: boolean;

  @Column({ type: 'timestamp' })
  estimateDate: string;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updatedDate: string;

  @ManyToOne(type => TaskListEntity)
  list?: TaskListEntity;
}
