import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Terms from './components/Terms/Terms.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://the-kitchen-concept-server-imnahmed17.vercel.app/chefs')
      },
      {
        path: '/chefs/:id',
        element: <PrivateRoute><ChefDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-kitchen-concept-server-imnahmed17.vercel.app/chefs/${params.id}`)
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: "terms",
        element: <Terms />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
