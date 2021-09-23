import { browser } from '../browser'
import { Config } from './Config'

export * from './Config'
export * from './ConfigData'

// config manager.
const config = new Config(browser.storage)

export { config }
