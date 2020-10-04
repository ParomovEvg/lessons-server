import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  hey: string;
}
