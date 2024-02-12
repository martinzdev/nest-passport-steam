import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { AuthRequest } from '../models/AuthRequest'
import { User } from '../models/User'
import { UserPayload } from '../models/UserPayload'

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<AuthRequest>()

    return request.user
  },
)
