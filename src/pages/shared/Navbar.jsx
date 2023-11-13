import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/shop/salads">Our Shop</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart">
          <button className="btn bg-transparent text-white p-0 border-none">
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>

      {user ? (
        <>
          <span>{user?.displayName}</span>
          <button onClick={handleLogout} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">LogIn</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className=" fixed  w-full z-10 bg-black bg-opacity-25">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white">
            BISTRO BOSS
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center px-1 space-x-2 uppercase text-white font-bold hover:text-white">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
