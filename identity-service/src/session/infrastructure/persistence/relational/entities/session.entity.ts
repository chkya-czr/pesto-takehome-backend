import {
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';
import { Session } from '../../../../domain/session';
import { UserEntity } from 'src/users/infrastructure/persistence/relational/entities/user.entity';
import { EntityRelationalHelper } from 'src/utils/postgres-helper';

@Entity({
  name: 'session',
})
export class SessionEntity extends EntityRelationalHelper implements Session {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, {
    eager: true,
  })
  @Index()
  user: UserEntity;

  @Column()
  hash: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
