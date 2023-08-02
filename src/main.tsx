import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { GlobalStyles } from './styles'
import { router } from './App'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
