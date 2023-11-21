import {
  FaAd,
  FaBabyCarriage,
  FaBook,
  FaBookMedical,
  FaList,
  FaMoneyBill,
  FaStreetView,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FcContacts, FcHome, FcMenu } from "react-icons/fc";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineSignalWifiStatusbar4Bar, MdOutlineStore } from "react-icons/md";
import useCarts from "../../Hook/useCarts";
import useAdmin from "../../Hook/useAdmin";

const DashBoard = () => {
  const [cart] = useCarts();
  // TODO:get isAdmin value form the database;
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FcHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItem"}>
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaStreetView />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBooking"}>
                  <FaBook />
                  Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUsers />
                  All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FcHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/history"}>
                  <MdOutlineStore />
                  History
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaBabyCarriage />
                  My Cart {cart.length}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaStreetView />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <BsFillJournalBookmarkFill />
                  Payment Real History
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider">OR</div>
          <li>
            <NavLink to={"/"}>
              <FcHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FcMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/Contact"}>
              <FcContacts />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className=" flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
