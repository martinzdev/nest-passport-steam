import { z } from 'zod'

export const envSchema = z.object({
  BASE_URL: z.string().url(),
  STEAM_RETURN_URL: z.string(),
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3333),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  STEAM_API_KEY: z.string(),
})

export type Env = z.infer<typeof envSchema>
