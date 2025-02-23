import { Link } from "react-router-dom";
import logo from "../assets/images/travel-logo.png";
import { useEffect, useState } from "react";
const Header = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setloggedIn(false);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setloggedIn(true);
    } else {
      setloggedIn(false);
    }
  }, []);
  return (
    <div className="bg-black py-[10px] px-[10px] sm:px-[30px] flex items-center flex-wrap justify-center sm:justify-between gap-3 text-white">
      <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-auto object-contain"
          />
          <p className="font-bold">Madina Travels</p>
        </div>
      </Link>

      <div className="flex items-center gap-2 sm:gap-5 flex-wrap justify-center">
        <p className="font-semibold cursor-pointer">About us</p>
        <p className="font-semibold cursor-pointer">Services</p>
        <p className="font-semibold cursor-pointer">Packages</p>
        <p className="font-semibold cursor-pointer">Contact us</p>
        {loggedIn ? (
          <p onClick={logoutUser} className="font-semibold cursor-pointer">
            Logout
          </p>
        ) : (
          <Link to={"/login"}>
            <p className="font-semibold cursor-pointer">Login</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
