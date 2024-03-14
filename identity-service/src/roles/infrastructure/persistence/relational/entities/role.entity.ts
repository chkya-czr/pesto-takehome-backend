import { Column, Entity, PrimaryColumn } from 'typeorm';
import { EntityRelationalHelper } from 'src/utils/postgres-helper';
import { Role } from 'src/roles/domain/role';

@Entity({
    name: 'role',
})
export class RoleEntity extends EntityRelationalHelper implements Role {
    @PrimaryColumn()
    id: number;

    @Column()
    name?: string;
}
