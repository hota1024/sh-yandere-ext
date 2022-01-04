/**
 * Button props.
 */

import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/ban-types
export type ButtonProps = {}

/**
 * Button component.
 */
export const Button = styled.button<ButtonProps>`
  background: white;
  padding: 8px 16px;

  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  ::hover {
    background: #f0f0f0;
  }
`
