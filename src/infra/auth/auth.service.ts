import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "./models/User";
import { UserPayload } from "./models/UserPayload";

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  async validateUser(identifier: string, profile: string, done: any) {
    if (!identifier) {
      throw new UnauthorizedException()
    }

    if (!profile) {
      throw new UnauthorizedException()
    }

    done(null, {
      account_id: profile
    })
  }

  async login(user: User) {
    const steamHex = Number(user.id).toString(16)

    const payload: UserPayload = {
      sub: user.id,
      steamHex: steamHex,
      username: user.username,
    }

    const jwtToken = this.jwt.sign(payload)

    console.log('Token: ', jwtToken)

    return {
      access_token: jwtToken
    }
  }
}