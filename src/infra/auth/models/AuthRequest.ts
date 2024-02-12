import { Request } from "express";
import { z } from "zod";

export const authRequestSchema = z.object({
  account_id: z.object({
    provider: z.string(),
    _json: z.object({
      steamid: z.string(),
      communityvisibilitystate: z.number(),
      profilestate: z.number(),
      personaname: z.string(),
      profileurl: z.string(),
      avatar: z.string(),
      avatarmedium: z.string(),
      avatarfull: z.string(),
      avatarhash: z.string(),
      lastlogoff: z.number(),
      personastate: z.number(),
      primaryclanid: z.string(),
      timecreated: z.number(),
      personastateflags: z.number(),
      loccountrycode: z.string()
    }),
    id: z.string(),
    displayName: z.string(),
    photos: z.array(z.object({ value: z.string() }))
  })
})

type AuthRequestSchema = z.infer<typeof authRequestSchema>

export interface AuthRequest extends Request {
  user: AuthRequestSchema
}