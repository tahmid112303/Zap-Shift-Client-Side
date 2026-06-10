import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";
import Coverage from "./Coverage";
import About from "./About";
import Error from "./Error";
import AuthLayout from "./AuthLayout/AuthLayout";
import Login from "./AuthLayout/Login";
import Register from "./AuthLayout/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home }, 
      { path: 'coverage', 
        Component: Coverage,
        loader: () => fetch('/ServiceCenters.json')
      }, 
      { path: 'about', 
        Component: About
      }, 
      { path: '*', 
        Component: Error
      }, 
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children:  [{
      path: 'login',
      Component: Login
    },
    {
      path: 'register',
      Component: Register
    },

  ] 
  }
]); 