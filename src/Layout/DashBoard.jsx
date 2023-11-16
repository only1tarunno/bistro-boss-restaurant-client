import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiFillCalendar, AiFillStar } from "react-icons/ai";
import { BsFillCalendarHeartFill, BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import "./dashboard.css";
import useCart from "../hooks/useCart";
import { FaBook, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // get is admin value from database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard sidebar  */}
      <div className="w-64 pt-10 bg-orange-400 min-h-screen">
        <ul className="menu dashboard-menu space-y-2 capitalize">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <AiFillHome></AiFillHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managebookings">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <BsFillCartFill></BsFillCartFill> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/rating">
                  <AiFillStar></AiFillStar> rating
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <BsFillCalendarHeartFill></BsFillCalendarHeartFill> my
                  bookings
                </NavLink>
              </li>
            </>
          )}

          {/* shared nav link  */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <AiFillHome></AiFillHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <GiHamburgerMenu></GiHamburgerMenu> Menu
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content  */}
      <div className=" flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
