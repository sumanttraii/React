import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
function Chai(){
  return(
    <h1>Chai with sumant</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Chai/>
    <App />
   
  </StrictMode>,
)
