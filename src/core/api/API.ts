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
    const { progress } = await this.get<{ progress: number }>('task/progress')

    return progress
  }

  /**
   * issue auth url.
   */
  async issueAuthURL(): Promise<string> {
    const { url } = await this.get<{ url: string }>('googletask/request')

    return url
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
   * post request.
   *
   * @param url url.
   * @param data post data.
   */
  async post<T>(url: string, data?: unknown): Promise<T> {
    const apiURL = await this.buildURL(url)

    const req = data
      ? fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
      : fetch(apiURL, {
          method: 'POST',
        })
    const res = await req

    return res.json()
  }

  /**
   * build url with api endpoint url.
   *
   * @param url url.
   */
  async buildURL(url: string): Promise<string> {
    const { apiEndpoint } = await this.config.get()

    const slash = apiEndpoint.endsWith('/') ? '' : '/'

    return apiEndpoint + slash + url
  }
}
