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
import ApproveRiders from "./ApproveRiders";
import AdminRoute from "../Admin/AdminRoute";
import AssignRiders from "./DashboardLayout/AssignRiders";
import AssignedDeliveries from "../RiderRoutes/AssignedDeliveries";
import RiderRoute from "../RiderRoutes/RiderRoute";
import CompletedDeliveries from "./DashboardLayout/CompletedDeliveries";
import ParcelTracker from "../ParcelTracker/ParcelTracker";
import DashboardHome from "./DashboardHome";
import UsersManagement from "./UsersManagement";
import Pricing from "./Pricing";

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
        element: <PrivateRoute><Rider></Rider></PrivateRoute>,
        loader: () => fetch('/ServiceCenters.json').then(res => res.json())
      }, 
      { path: 'sendParcel', 
        element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
        loader: () => fetch('/ServiceCenters.json').then(res => res.json())
      }, 
      { path: 'pricing', 
        element: <Pricing></Pricing>,
      }, 
      { path: 'about', 
        Component: About
      },
      {
        path: 'parcel-tracker/:trackingId',
        Component: ParcelTracker
      },
      { path: '*', 
        Component: Error
      }, 
    ],
  },

  //AuthLayout links
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

  //Dashboard links
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
    {
      index: true,
      Component: DashboardHome
    },
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
    },

    //Rider Only Routes

    {
      path: 'assigned-deliveries',
      element: <RiderRoute><AssignedDeliveries></AssignedDeliveries></RiderRoute>
    },

    {
      path: 'completed-deliveries',
      element: <RiderRoute><CompletedDeliveries></CompletedDeliveries></RiderRoute>
    },


    // Admin Only Routes
    {
      path: 'approve-riders',
      element: <AdminRoute><ApproveRiders></ApproveRiders></AdminRoute>
    },
    {
      path: 'user-management',
      element: <AdminRoute><UsersManagement></UsersManagement></AdminRoute>
    },
    {
      path: 'assign-riders',
      element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
    }
  ]
  }
]); 