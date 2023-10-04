import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DataProvider } from './context/DataContext.tsx';
import Splash from './pages/Splash.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Catalog from './pages/Catalog.tsx';
import './styled-components/Splash.css';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Splash />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/catalog',
      element: <Catalog />,
      children: [],
    },
  ]);

  return (
    <>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </>
  )
}

export default App
