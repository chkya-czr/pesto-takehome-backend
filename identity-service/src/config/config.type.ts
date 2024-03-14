import { AppConfig } from './app-config.type';
import { AuthConfig } from '../auth/config/auth-config.type';
import { DatabaseConfig } from '../database/config/database-config.type';

export type AllConfigType = {
    app: AppConfig;
    auth: AuthConfig;
    database: DatabaseConfig;
};
