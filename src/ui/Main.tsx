import { api } from '@/core/api'
import { config } from '@/core/config'
import React, { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { Configuration } from './components/Configuration'
import { Container } from './components/Container'
import { Content } from './components/Content'
import { PageTitle } from './components/PageTitle'

/**
 * Main component.
 */
export const Main: React.VFC = () => {
  const [progress, setProgress] = useState<number>()

  const updateProgress = async () => {
    const p = await api.getProgress()
    setProgress(p)
  }

  useEffect(() => {
    updateProgress()
  }, [])

  return (
    <>
      <Container>
        <PageTitle>せってい</PageTitle>
        <Content>
          <Card>
            <h2>きほんせってい</h2>
            <Configuration config={config} />
          </Card>
          <Card>
            <h2>デバッグ</h2>
            {typeof progress != 'undefined' && <p>進捗率: {progress}</p>}
          </Card>
        </Content>
      </Container>
    </>
  )
}
