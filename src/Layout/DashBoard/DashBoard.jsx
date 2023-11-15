import { FaBabyCarriage, FaBookMedical, FaMoneyBill, FaStreetView } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FcHome, FcMenu } from "react-icons/fc";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineStore } from "react-icons/md";

const DashBoard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FcHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <MdOutlineStore />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaBabyCarriage />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaStreetView />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booking"}>
              <BsFillJournalBookmarkFill />
              My Booking
            </NavLink>
          </li>
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
