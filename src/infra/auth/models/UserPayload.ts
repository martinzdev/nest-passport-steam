export interface UserPayload {
  sub: number
  steamHex: string
  username: string
  iat?: number
  exp?: number
}