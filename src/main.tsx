import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import ProfilesPage from './pages/ProfilesPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profiles',
    element: <ProfilesPage />,
    children: [
      {
        path: ':profileId',
        element: <ProfilePage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
