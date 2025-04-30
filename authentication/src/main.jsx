import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Usercontext from './pages/API/Usercontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Usercontext> */}
        <App />
      {/* </Usercontext> */}
    </BrowserRouter>
  </StrictMode>,
  // document.getElementById('root')

)
