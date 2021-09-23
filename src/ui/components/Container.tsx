import styled from 'styled-components'

/**
 * Container props.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type ContainerProps = {}

/**
 * Container component.
 */
export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-flow: column;

  width: 100%;
  height: 100vh;
`
