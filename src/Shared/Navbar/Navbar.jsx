import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaBabyCarriage } from "react-icons/fa";
import useCarts from "../../Hook/useCarts";

const Navbar = () => {

  const {user, logOUt} = useContext(AuthContext);
  const [cart] = useCarts();

  const handleLogOut =()=>{
    logOUt()
    .then(()=>{})
    .catch(error=>{
      console.log(error);
    })
  }

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order Food</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>

      <li>
        <NavLink to={"/signUp"}>SignUp</NavLink>
      </li>

      <li>
        <NavLink to={"/dashboard/cart"}>
          <button className="flex gap-2">
            <FaBabyCarriage />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-40 bg-black/20 max-w-screen-2xl text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div>
          {user ? (
            <>
                <div className="flex items-center ml-4">
                  <div>
                    <button onClick={handleLogOut}>LogOut</button>
                  </div>
                  <div>
                    <div className="avatar online">
                      <div className="w-12 rounded-full ml-6">
                        <img src={user.photoUrl} />
                      </div>
                    </div>
                  </div>
                  <div className="ml-8">
                    <span>{user.displayName} </span>
                  </div>
                </div>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            </>
          )}
        </div>
        <div className="navbar-end">
          <a className="btn">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
