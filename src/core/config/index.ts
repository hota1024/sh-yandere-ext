import { Browser } from 'webextension-polyfill-ts'
import { Config } from './Config'

declare const browser: Browser

export * from './Config'
export * from './ConfigData'

// config manager.
const config = new Config(browser.storage)

export { config }
