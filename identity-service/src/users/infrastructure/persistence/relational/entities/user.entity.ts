import {
    Column,
    AfterLoad,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { RoleEntity } from '../../../../../roles/infrastructure/persistence/relational/entities/role.entity';
import { StatusEntity } from '../../../../../statuses/infrastructure/persistence/postgres/entities/status.entity';
import { Exclude, Expose } from 'class-transformer';
import { User } from '../../../../domain/user';
import { EntityRelationalHelper } from 'src/utils/postgres-helper';
import { AuthProvidersEnum } from 'src/auth/auth-providers.enum';

@Entity({
    name: 'user',
})
export class UserEntity extends EntityRelationalHelper implements User {
    @PrimaryGeneratedColumn()
    id: number;

    // For "string | null" we need to use String type.
    // More info: https://github.com/typeorm/typeorm/issues/2567
    @Column({ type: String, unique: true, nullable: true })
    @Expose({ groups: ['me', 'admin'] })
    email: string | null;

    @Column({ nullable: true })
    @Exclude({ toPlainOnly: true })
    password?: string;

    @Exclude({ toPlainOnly: true })
    public previousPassword?: string;

    @AfterLoad()
    public loadPreviousPassword(): void {
        this.previousPassword = this.password;
    }

    @Column({ default: AuthProvidersEnum.email })
    @Expose({ groups: ['me', 'admin'] })
    provider: string;

    @Index()
    @Column({ type: String, nullable: true })
    @Expose({ groups: ['me', 'admin'] })
    socialId?: string | null;

    @Index()
    @Column({ type: String, nullable: true })
    firstName: string | null;

    @Index()
    @Column({ type: String, nullable: true })
    lastName: string | null;

    @ManyToOne(() => RoleEntity, {
        eager: true,
    })
    role?: RoleEntity | null;

    @ManyToOne(() => StatusEntity, {
        eager: true,
    })
    status?: StatusEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
