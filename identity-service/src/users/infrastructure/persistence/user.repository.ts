import { User } from '../../domain/user';
import { NullableType } from 'src/utils/types/nullable.type';
import { DeepPartial } from 'src/utils/types/deep-partial.type';
import { EntityCondition } from 'src/utils/types/entity-condition';

export abstract class UserRepository {
  abstract create(
    data: Omit<User, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>,
  ): Promise<User>;

  abstract findOne(fields: EntityCondition<User>): Promise<NullableType<User>>;

  abstract update(
    id: User['id'],
    payload: DeepPartial<User>,
  ): Promise<User | null>;

  abstract softDelete(id: User['id']): Promise<void>;
}
