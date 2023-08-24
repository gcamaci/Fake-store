import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//strict mode rendering components twice, removed for now
ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
      <App />
    </div>,
)
