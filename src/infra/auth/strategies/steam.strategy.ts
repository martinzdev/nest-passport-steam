import { EnvService } from "@/infra/env/env.service"
import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-steam"
import { AuthService } from "../auth.service"

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor(
    readonly env: EnvService,
    private authService: AuthService
  ){
    const baseURL = env.get('BASE_URL')
    const port = env.get('PORT')
    const returnURL = env.get('STEAM_RETURN_URL')
    const apiKey = env.get('STEAM_API_KEY')

    super({
      returnURL: `${baseURL}:${port}/${returnURL}`,
      realm: `${baseURL}:${port}`,
      apiKey
    })
  }

  validate(identifier: string, profile: any, done: any) {
    return this.authService.validateUser(identifier, profile, done)
  }
}