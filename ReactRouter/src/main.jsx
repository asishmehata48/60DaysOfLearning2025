import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);