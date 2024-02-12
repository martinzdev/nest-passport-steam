import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"

@Injectable()
export class SteamAuthGuard extends AuthGuard('steam') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context)
  }
  
  handleRequest(err: Error, user: any) {
    if (err || !user) {
      throw new UnauthorizedException(err?.message)
    }

    return user
  }
}