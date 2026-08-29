import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";
import Coverage from "./Coverage";
import About from "./About";
import Error from "./Error";
import AuthLayout from "./AuthLayout/AuthLayout";
import Login from "./AuthLayout/Login";
import Register from "./AuthLayout/Register";
import Rider from "./Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "./SendParcel";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
import MyParcels from "./DashboardLayout/MyParcels";
import Payment from "./Payment";
import PaymentSuccess from "./PaymentSuccess";
import PaymentCancel from "./PaymentCancel";
import PaymentHistory from "./DashboardLayout/PaymentHistory";

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
      { path: 'rider', 
        element: <PrivateRoute><Rider></Rider></PrivateRoute>
      }, 
      { path: 'sendParcel', 
        element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
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
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
    {
      path: 'my-parcels',
      Component: MyParcels
    },
    {
      path: 'payment/:parcelId',
      Component: Payment
    },
    {
      path: 'payment-success',
      Component: PaymentSuccess
    },
    {
      path: 'payment-cancel',
      Component: PaymentCancel
    },
    {
      path: 'payment-history',
      Component: PaymentHistory
    }
  ]
  }
]); 