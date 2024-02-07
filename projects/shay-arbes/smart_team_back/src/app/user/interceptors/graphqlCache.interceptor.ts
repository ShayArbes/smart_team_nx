import { CacheInterceptor } from '@nestjs/cache-manager';
import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
@Injectable()
export class GraphqlCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext) {
    const getArgs = GqlExecutionContext.create(context).getArgs();
    const args = getArgs.id || getArgs.email;
    const key = this.reflector.get('graphqLCacheKey', context.getHandler());
    if (args) {
      return `${key}:${args}`;
    }
    return undefined;
  }
}