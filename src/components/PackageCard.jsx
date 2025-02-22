

import { useState, useEffect } from "react";
import { ImAirplane, ImSpoonKnife } from "react-icons/im";
import { IoIosDocument } from "react-icons/io";
import { FaBus, FaGift } from "react-icons/fa";
import { MdOutlineLocalHotel } from "react-icons/md";
import { GrSync } from "react-icons/gr";
import { Link } from "react-router-dom";

const PackageCard = () => {
  const discountExpiry = new Date("2025-02-26T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = discountExpiry - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return null; // Discount expired
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Link to={"/package/234234234"}>
      <div className="flex flex-col group rounded-lg w-[400px] shadow-md bg-white relative cursor-pointer">
        {timeLeft ? (
          <div className="absolute -top-[20px] -right-[20px] bg-red-700 text-white font-bold italic rounded-full py-2 px-4 z-10 shadow-md text-sm">
            Offer Ends In: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}
            m {timeLeft.seconds}s
          </div>
        ) : (
          <div className="absolute -top-[20px] -right-[20px] bg-gray-500 text-white font-bold italic rounded-full py-2 px-4 z-10 shadow-md text-sm">
            Offer Expired
          </div>
        )}

        <div className="overflow-hidden rounded-lg w-full h-[300px]">
          <img
            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-700 ease-in-out"
            src="https://plus.unsplash.com/premium_photo-1670745800247-271e8977da41?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFkaW5haHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Umrah Package"
          />
        </div>

        <div className="flex flex-col gap-4 py-5 px-4">
          <p className="text-center text-2xl font-black italic bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent">
            Umrah Gold Package
          </p>
          <p className="rounded-full bg-gradient-to-r   from-blue-700 to-blue-950 w-full text-center py-[5px] px-[20px]  text-white text-[22px]  font-black italic ">
            PKR 2,90,000
          </p>

          <div className="flex justify-between items-center bg-black text-white py-2 px-4 rounded-md">
            <p>10 March 2025</p>
            <GrSync className="text-white" size={22} />
            <p>30 March 2025</p>
          </div>

          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias Lorem
            ipsum dolor sit amet consectetur.
          </p>

          <div className="flex justify-center items-center mt-3">
            <div className="flex items-center justify-center gap-5">
              <ImAirplane color="#1447e6" size={24} />
              <IoIosDocument color="#1447e6" size={24} />
              <ImSpoonKnife color="#1447e6" size={24} />
              <FaBus color="#1447e6" size={24} />
              <MdOutlineLocalHotel color="#1447e6" size={24} />
              <FaGift color="#1447e6" size={24} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;
