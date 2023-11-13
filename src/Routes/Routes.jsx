import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import PvtRoute from "./PvtRoute";

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
        element: (
          <PvtRoute>
            <Shop></Shop>
          </PvtRoute>
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
