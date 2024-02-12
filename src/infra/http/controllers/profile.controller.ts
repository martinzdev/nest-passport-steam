import { Controller, Get } from "@nestjs/common";

@Controller('/profile')
export class ProfileController {
  constructor(){}

  @Get('/me')
  async getProfile() {
    return 'return profile'
  }
}