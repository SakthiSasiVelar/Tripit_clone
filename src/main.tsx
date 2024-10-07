
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { lazy, Suspense } from 'react'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query'


const TripItPage =  lazy(()=>import('./Pages/TripItPage/TripItPage.tsx'));
const HomePage = lazy(()=>import('./Pages/HomePage/HomePage.tsx'))


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      suspense : true
    }
  }
}
);


const appRouter = createBrowserRouter([
  {
     path:'/',
     element:<App />,
     children : [
      {
        path:'/',
        element:
        <Suspense fallback={<div>Loading....</div>}>
          <HomePage />
        </Suspense>
        
      },
      {
        path:'/free',
        element:
        <Suspense fallback={<div>Loading....</div>}>
           <TripItPage />
         </Suspense>
      }
     ]
  }
])

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={appRouter} />
  </QueryClientProvider>
    
)


