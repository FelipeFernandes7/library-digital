import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Layout } from './components/layout'
import { Login } from './pages/login'
import { Private } from './routes'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Private>
            <Home />
          </Private>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
])
export { router }
