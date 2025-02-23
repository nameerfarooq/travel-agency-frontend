/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { ImAirplane, ImSpoonKnife } from "react-icons/im";
import { IoIosDocument } from "react-icons/io";
import { FaBus, FaGift } from "react-icons/fa";
import { MdOutlineLocalHotel } from "react-icons/md";
import { GrSync } from "react-icons/gr";
import { Link } from "react-router-dom";
import { convertDate } from "../utils/helperFunctions";

const PackageCard = ({ packageDetails }) => {
  const discountExpiry = new Date(packageDetails?.discountValidTill).getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = discountExpiry - now;

    if (difference > 0 && packageDetails.isDiscountValid) {
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
    <Link to={`/package/${packageDetails._id}`}>
      <div className="flex flex-col group rounded-lg w-[400px] shadow-md bg-white relative cursor-pointer">
        {timeLeft && (
          <div className="absolute -top-[20px] -right-[20px] bg-red-700 text-white font-bold italic rounded-full py-2 px-4 z-10 shadow-md text-sm">
            Offer Ends In: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}
            m {timeLeft.seconds}s
          </div>
        )}

        <div className="overflow-hidden rounded-lg w-full h-[300px]">
          <img
            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-700 ease-in-out"
            src={packageDetails?.image}
            alt="Umrah Package"
          />
        </div>

        <div className="flex flex-col gap-4 py-5 px-4">
          <p className="text-center text-2xl font-black italic bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent">
            {packageDetails?.name}
          </p>
          <p className="rounded-full bg-gradient-to-r   from-blue-700 to-blue-950 w-full text-center py-[5px] px-[20px]  text-white text-[22px]  font-black italic ">
            PKR {packageDetails?.price}
          </p>

          <div className="flex justify-between items-center bg-black text-white py-2 px-4 rounded-md">
            <p>{convertDate(packageDetails.departureDate)}</p>
            <GrSync className="text-white" size={22} />
            <p>{convertDate(packageDetails.arrivalDate)}</p>
          </div>

          <p className="text-gray-500">{packageDetails.description}</p>

          <div className="flex justify-center items-center mt-3">
            <div className="flex items-center justify-center gap-5">
              <ImAirplane
                color={packageDetails.features.tickets ? "#1447e6" : "gray"}
                size={24}
              />
              <IoIosDocument
                color={packageDetails.features.visa ? "#1447e6" : "gray"}
                size={24}
              />
              <ImSpoonKnife
                color={packageDetails.features.food ? "#1447e6" : "gray"}
                size={24}
              />
              <FaBus
                color={packageDetails.features.transport ? "#1447e6" : "gray"}
                size={24}
              />
              <MdOutlineLocalHotel
                color={packageDetails.features.hotels ? "#1447e6" : "gray"}
                size={24}
              />
              <FaGift
                color={packageDetails.features.gift ? "#1447e6" : "gray"}
                size={24}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;
