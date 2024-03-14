import { Exclude, Expose } from 'class-transformer';
import { Role } from 'src/roles/domain/role';
import { Status } from 'src/statuses/domain/status';
// import { FileType } from 'src/files/domain/file';

export class User {
  id: number | string;

  @Expose({ groups: ['me', 'admin'] })
  email: string | null;

  @Exclude({ toPlainOnly: true })
  password?: string;

  @Exclude({ toPlainOnly: true })
  previousPassword?: string;

  @Expose({ groups: ['me', 'admin'] })
  provider: string;

  @Expose({ groups: ['me', 'admin'] })
  socialId?: string | null;
  firstName: string | null;
  lastName: string | null;
  role?: Role | null;
  status?: Status;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
