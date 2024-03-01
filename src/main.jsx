import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme.jsx'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
  <CssBaseline />
    <App />
  </React.StrictMode>,
  </ThemeProvider>
)
