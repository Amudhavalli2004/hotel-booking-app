import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { SearchContextProvider } from './context/SearchContext.js'
import { AuthContextProvider } from './context/AuthContext.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
