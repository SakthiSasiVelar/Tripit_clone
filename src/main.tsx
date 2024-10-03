
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import HomePage from './Pages/HomePage/HomePage.tsx'
import TripItPage from './Pages/TripItPage/TripItPage.tsx'

const appRouter = createBrowserRouter([
  {
     path:'/',
     element:<App />,
     children : [
      {
        path:'/',
        element:<HomePage />
      },
      {
        path:'/free',
        element:<TripItPage />
      }
     ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={appRouter} />
    
)
