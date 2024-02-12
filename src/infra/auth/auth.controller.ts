import { Public } from "@/infra/auth/decorators/public";
import { Controller, Get, HttpCode, HttpStatus, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SteamAuthGuard } from "./guards/steam-auth.guard";
import { AuthRequest } from "./models/AuthRequest";


@Controller('/auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ){}

  @Public()
  @UseGuards(SteamAuthGuard)
  @Get('/steam')
  @HttpCode(HttpStatus.OK)
  async login() {
    return
  }


  @Public()
  @Get('/steam/return')
  @UseGuards(SteamAuthGuard)
  async return(@Req() req: AuthRequest) {
    const userId = Number(req.user.account_id.id)
    const User = {
      id: userId,
      username: req.user.account_id.displayName,
    }

    this.authService.login(User)
  }
}