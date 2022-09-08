import './shim'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'

const rootElement = document.getElementById("root")!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <App />
)