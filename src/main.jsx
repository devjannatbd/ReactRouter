import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <div>This is from router component</div>
//   },
//   {
//     path:'/about',
//     element: <div>This is from about component</div>
//   },
//   {
//     path:'/service',
//     element: <div>This is from service component</div>
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<App />
  </StrictMode>,
)
