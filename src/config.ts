import type { Browser } from 'webextension-polyfill-ts'
declare const browser: Browser

export type Config = {
  'api-endpoint': string
}

export type ConfigKey = keyof Config

export const setDefaults = async (): Promise<void> => {
  const { config } = await browser.storage.local.get('config')

  await browser.storage.local.set({
    config: {
      'api-endpoint': config['api-endpoint'] || 'http://localhost:8080',
    },
  })
}

export const getConfig = async (): Promise<Config> => {
  const { config } = await browser.storage.local.get('config')

  return config
}

export const setConfig = async (
  key: string,
  value: string | number
): Promise<void> => {
  const config = await getConfig()

  browser.storage.local.set({
    config: {
      ...config,
      [key]: value,
    },
  })
}
