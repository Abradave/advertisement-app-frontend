import './App.css'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/user-profile",
          element: <UserProfilePage />
        },
        {
          path: "/register",
          element: <RegisterPage />
        },
        {
          path: "/login",
          element: <LoginPage />
        },
      ],
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App
