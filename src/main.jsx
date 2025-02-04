import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Calculator from './components/Calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator/>
  </StrictMode>,
)
