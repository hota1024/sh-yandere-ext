import decode from 'jwt-decode'

/**
 * JWTPayload type.
 */
export type JWTPayload = {
  uid: string
  name: string
}

/**
 * decode jwt.
 *
 * @param jwt jwt.
 */
export const decodeJWT = (jwt: string): JWTPayload => {
  return decode<JWTPayload>(jwt)
}
