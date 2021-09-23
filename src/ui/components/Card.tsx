/**
 * Card props.
 */

import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/ban-types
export type CardProps = {}

/**
 * Card component.
 */
export const Card = styled.div<CardProps>`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 4px;
  padding: 1rem;
  margin: 8px;
`
