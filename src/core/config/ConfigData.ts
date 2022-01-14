/**
 * ConfigData type.
 */
export type ConfigData = {
  apiEndpoint: string
  jwt: string
  allowCommonYandere: boolean
}

/**
 * ConfigDataKey type.
 */
export type ConfigDataKey = keyof Required<ConfigData>
