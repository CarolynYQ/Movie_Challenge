import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Splash from './pages/Splash.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Catalog from './pages/Catalog.tsx';
import ItemMovie from './pages/ItemMovie.tsx';
import './styled-components/Splash.css';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Splash />,
      errorElement: <ErrorPage />,
    },
    {
        path: '/catalog/:movieId',
        element: <ItemMovie />,
    },
    {
      path: '/catalog',
      element: <Catalog />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
