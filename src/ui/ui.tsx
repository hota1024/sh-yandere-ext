import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './Main'

const app = document.getElementById('app')

if (!app) {
  throw new Error('app is not defined.')
}

ReactDOM.render(<Main />, app)
