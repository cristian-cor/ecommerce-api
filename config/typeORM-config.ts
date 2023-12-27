import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: () => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [join(__dirname, './src/**/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
    migrationsTableName: 'migrations',
    logging: true,
    extra: {
      charset: 'utf8mb4_unicode_ci',
    },
    cli: { migrationsDir: join(__dirname, '../../migrations') },
  }),
};
