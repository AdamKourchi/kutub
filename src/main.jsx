import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Nav from './Nav.jsx'
import Container from './Container'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Container/>
  </React.StrictMode>,
)
