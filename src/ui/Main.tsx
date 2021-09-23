import { config } from '@/core/config'
import React from 'react'
import { Card } from './components/Card'
import { Configuration } from './components/Configuration'
import { Container } from './components/Container'
import { Content } from './components/Content'
import { PageTitle } from './components/PageTitle'

/**
 * Main component.
 */
export const Main: React.VFC = () => {
  return (
    <>
      <Container>
        <PageTitle>せってい</PageTitle>
        <Content>
          <Card>
            <Configuration config={config} />
          </Card>
        </Content>
      </Container>
    </>
  )
}
