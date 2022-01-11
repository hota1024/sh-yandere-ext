import { JWTPayload } from '../decodeJWT'

/**
 * ConfigData type.
 */
export type ConfigData = {
  apiEndpoint: string
  jwt: string
  payload: Partial<JWTPayload>
}

/**
 * ConfigDataKey type.
 */
export type ConfigDataKey = keyof Required<ConfigData>
