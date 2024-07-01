import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './components/App/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/',
  element: <App />
}])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
