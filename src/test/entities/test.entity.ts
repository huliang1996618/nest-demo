import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
} from 'typeorm';
@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varbinary', length: 200 })
  name: string;

  @Column({ select: true })
  age: number;

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;

  @Generated('uuid')
  uuid: string;

  @Column({ type: 'enum', enum: [1, 2, 3], default: 1 })
  code: number;
}
