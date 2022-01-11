import type { Storage } from 'webextension-polyfill-ts'
import { ConfigDataKey } from '.'
import { ConfigData } from './ConfigData'

/**
 * Config class.
 */
export class Config {
  private readonly storageKey = 'config'

  /**
   * Config constructor.
   *
   * @param storage storage.
   */
  constructor(private readonly storage: Storage.Static) {}

  /**
   * reset config.
   */
  async reset(): Promise<void> {
    this.set(this.defaults())
  }

  /**
   * returns config default items.
   */
  defaults(): ConfigData {
    return {
      apiEndpoint: 'http://localhost:8080/',
      jwt: '',
    }
  }

  /**
   * returns config.
   */
  async get(): Promise<ConfigData> {
    const config = await this.getConfigData()
    const defaults = this.defaults()

    for (const [key, value] of Object.entries(config)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config[key as ConfigDataKey] = (value ?? (defaults as any)[key]) as any
    }

    return config
  }

  /**
   * set config data.
   *
   * @param data partial config data.
   */
  async set(data: Partial<ConfigData>): Promise<void> {
    const config = await this.get()

    await this.storage.local.set({
      [this.storageKey]: {
        ...config,
        ...data,
      },
    })
  }

  /**
   * returns local storage config data.
   */
  private async getConfigData(): Promise<ConfigData> {
    const { config } = await this.storage.local.get()

    return config ?? this.defaults()
  }
}
