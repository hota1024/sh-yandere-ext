/**
 * Input props.
 */

import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/ban-types
export type InputProps = {}

/**
 * Input component.
 */
export const Input = styled.input<InputProps>`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
`
