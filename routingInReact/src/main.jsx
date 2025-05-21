import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout'
import { Home , About , Contact , Github } from './components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element : <Layout />,
    children : [
      {
        path: '',
        element : <Home />
      },
      {
        path: 'about',
        element : <About />
      },
      {
        path: 'contact',
        element : <Contact />
      },
      {
        path: 'github',
        element : <Github />,
        loader : async () =>{
          const res = await fetch('https://api.github.com/users/vaibhav211960')
          return res.json()
        },
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
