import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";
import Coverage from "./Coverage";
import About from "./About";
import Error from "./Error";

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
]); 