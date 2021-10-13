import { Config } from '../config'

/**
 * API class.
 */
export class API {
  /**
   * API constructor.
   *
   * @param config config manager.
   */
  constructor(private readonly config: Config) {}

  /**
   * fetch progress.
   */
  async getProgress(): Promise<number> {
    const { progress } = await this.get<{ progress: number }>('/task/progress')

    return progress
  }

  /**
   * get request.
   *
   * @param url url.
   */
  async get<T>(url: string): Promise<T> {
    const apiURL = await this.buildURL(url)
    const res = await fetch(apiURL)
    const data = await res.json()

    return data
  }

  /**
   * build url with api endpoint url.
   *
   * @param url url.
   */
  async buildURL(url: string): Promise<string> {
    const { apiEndpoint } = await this.config.get()

    return apiEndpoint + url
  }
}
