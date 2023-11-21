import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Manue/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import DashBoard from "../Layout/DashBoard/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRouter from "./AdminRouter/AdminRouter";
import MangeItem from "../Pages/DashBoard/ManageItem/MangeItem";
import UPdateItem from "../Pages/DashBoard/UpdateItem/UPdateItem";
import Payment from "../Pages/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistiory/PaymentHistory";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: (
          <PrivateRoutes>
            <Menu></Menu>
          </PrivateRoutes>
        ),
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      //normal user routes
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      // only admin user routes
      {
        path:'adminHome',
        element:<AdminRouter>
          <AdminHome></AdminHome>
        </AdminRouter>
      },
      {
        path: "addItems",
        element: (
          <AdminRouter>
            <AddItems></AddItems>
          </AdminRouter>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRouter>
            <MangeItem></MangeItem>
          </AdminRouter>
        ),
      },
      {
        path: "updateItem/:id",
        element: 
          <AdminRouter>
            <UPdateItem></UPdateItem>
          </AdminRouter>,
        loader: ({ params }) =>fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
