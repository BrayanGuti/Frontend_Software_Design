import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <h1>error 404 </h1>,
  },
  {
    path: '/register',
    element: <RegisterPage/>,
  },
  {
    path: '/login',
    element: <LoginPage/>,
  }
])



createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
