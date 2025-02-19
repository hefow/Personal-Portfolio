import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import Home from './pages/Home'
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
