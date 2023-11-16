import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import PvtRoute from "./PvtRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Managebookings from "../pages/Dashboard/ManageBookings/Managebookings";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/AddItems/AddItems";

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
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "shop/:category",
        element: <Shop></Shop>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PvtRoute>
        <DashBoard></DashBoard>
      </PvtRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // admin routes
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "managebookings",
        element: (
          <AdminRoute>
            <Managebookings></Managebookings>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
