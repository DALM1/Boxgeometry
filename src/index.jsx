import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

function Container(props) {
  return <div style={{ position: 'absolute', inset: 0 }} {...props} />
}

const root = createRoot(document.getElementById('root'))

root.render(
  <Container>
    <App />
  </Container>
)
