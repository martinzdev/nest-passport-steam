import { Module } from "@nestjs/common";
import { ProfileController } from "./controllers/profile.controller";

@Module({
  imports: [],
  controllers: [ProfileController],
  providers: []
})
export class HttpModule {}