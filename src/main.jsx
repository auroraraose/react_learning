import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './App.jsx'
import Trial from './trial.jsx'
import Ref from './useRef.jsx'
// import AppLayout from './App.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppLayout /> */}
    {/* <Trial/> */}
    <Ref/>
  </StrictMode>,
)
