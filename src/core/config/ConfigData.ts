/**
 * ConfigData type.
 */
export type ConfigData = {
  apiEndpoint: string
  jwt: string
}

/**
 * ConfigDataKey type.
 */
export type ConfigDataKey = keyof Required<ConfigData>
