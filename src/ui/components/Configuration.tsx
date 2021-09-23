import React, { useEffect, useState } from 'react'
import { Config } from '@/core/config'
import { Input } from './Input'
import { Label } from './Label'
import { ConfigItem } from './ConfigItem'

/**
 * Configuration props.
 */
export type ConfigurationProps = {
  /**
   * config manager.
   */
  config: Config
}

/**
 * Configuration component.
 */
export const Configuration: React.VFC<ConfigurationProps> = (props) => {
  const { config } = props
  const [apiEndpoint, setApiEndpoint] = useState('')

  const loadConfig = async () => {
    const data = await config.get()
    setApiEndpoint(data.apiEndpoint)
  }

  useEffect(() => {
    loadConfig()
  }, [])

  useEffect(() => {
    config.set({ apiEndpoint })
  }, [apiEndpoint])

  return (
    <>
      <ConfigItem>
        <Label htmlFor="apiEndpoint">APIのエンドポイント</Label>
        <Input
          id="apiEndpoint"
          value={apiEndpoint}
          onChange={({ target: { value } }) => setApiEndpoint(value)}
        />
      </ConfigItem>
    </>
  )
}
