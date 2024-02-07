import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealModule } from './deal/deal.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      password: process.env.DB_PASSWORD || '12345678',
      username: process.env.DB_USERNAME || 'postgres',
      autoLoadEntities: true,
      database: process.env.DB_DATABASE || 'smart-team',
      synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
      logging: process.env.DB_LOGGING === 'true' || true,
    }),

    CacheModule.register({
      isGlobal: true,
      ttl: parseInt(process.env.CACHE_TTL, 10) || 600,
      store: redisStore,
      host: process.env.CACHE_HOST || 'localhost',
      port: parseInt(process.env.CACHE_PORT, 10) || 6379,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      autoSchemaFile: 'autoSchema.gql',
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    AuthModule,
    UserModule,
    DealModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
