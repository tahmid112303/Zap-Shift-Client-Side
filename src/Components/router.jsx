import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";
import Coverage from "./Coverage";

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
    ],
  },
]); 