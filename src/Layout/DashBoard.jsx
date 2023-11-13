import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import { AiFillHome, AiFillCalendar, AiFillStar } from "react-icons/ai";
import { BsFillCalendarHeartFill, BsFillCartFill } from "react-icons/bs";
import "./dashboard.css";

const DashBoard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        {/* dashboard sidebar  */}
        <div className="w-64 pt-24 bg-orange-400 min-h-screen">
          <ul className="menu dashboard-menu space-y-2 capitalize">
            <li>
              <NavLink to="/dashboard/userHome">
                <AiFillHome></AiFillHome> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <AiFillCalendar></AiFillCalendar> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart">
                <BsFillCartFill></BsFillCartFill> My Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/rating">
                <AiFillStar></AiFillStar> rating
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
                <BsFillCalendarHeartFill></BsFillCalendarHeartFill> my bookings
              </NavLink>
            </li>
          </ul>
        </div>

        {/* dashboard content  */}
        <div className="pt-24 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
