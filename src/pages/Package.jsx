import { ImAirplane, ImSpoonKnife } from "react-icons/im";
import { IoIosDocument } from "react-icons/io";
import { FaBus, FaGift } from "react-icons/fa";
import { MdOutlineLocalHotel } from "react-icons/md";
import { GrSync } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Package = () => {
  const [myPackage, setmypackage] = useState("");

  const params = useParams();
  const getPackage = async () => {
    const res = await axios.get(
      `${
        import.meta.env.VITE_APP_BACKEND_BASE_URL
      }/package/get-specific-package/${params.id}`
    );
    setmypackage(res?.data?.existingPackage);
    console.log("packages : ", res?.data?.existingPackage);
  };

  useEffect(() => {
    getPackage();
  }, []);
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
    <div className="flex justify-center gap-[20px] sm:gap-[40px] px-[30px]">
      <div className="flex items-center p-4 m-4 justify-center rounded-lg bg-white shadow-2xl flex-1">
        <img className="rounded-lg" src={myPackage.image} alt="" />
      </div>
      <div className="flex flex-col gap-[30px] rounded-lg flex-1 py-[30px]">
        <p className="text-[42px] font-black italic bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent">
          {myPackage?.name}
        </p>
        <p className="rounded-full bg-gradient-to-r   from-blue-700 to-blue-950 w-full text-center py-[5px] px-[20px]  text-white text-[32px]  font-black italic ">
          PKR{" "}
          {myPackage?.isDiscountValid
            ? Number(myPackage?.price) -
              (Number(myPackage?.price) / 100) *
                Number(myPackage?.discountPercentage)
            : myPackage?.price}
          {myPackage?.isDiscountValid && (
            <strike className="text-[22px]">PKR {myPackage?.price}</strike>
          )}
        </p>
        {timeLeft && (
          <div className="text-center bg-red-700 text-white font-bold italic rounded-full py-2 px-4 z-10 shadow-md text-sm">
            Offer Ends In: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}
            m {timeLeft.seconds}s
          </div>
        )}
        <div className="flex justify-between items-center bg-black text-white py-2 px-4 rounded-md">
          <div className="flex items-center gap-3">
            <p className="bg-white rounded-full py-[3px] px-[10px] text-black">
              from KHI
            </p>
            <p>01 March 2025</p>
          </div>
          <GrSync className="text-white" size={22} />
          <div className="flex items-center gap-3">
            <p>22 March 2025</p>
            <p className="bg-white rounded-full py-[3px] px-[10px] text-black">
              to JED
            </p>
          </div>
        </div>

        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias Lorem
          ipsum dolor sit amet consectetur.
        </p>

        <div className="flex items-center  gap-5">
          <ImAirplane color="#1447e6" size={24} />
          <IoIosDocument color="#1447e6" size={24} />
          <ImSpoonKnife color="#1447e6" size={24} />
          <FaBus color="#1447e6" size={24} />
          <MdOutlineLocalHotel color="#1447e6" size={24} />
          <FaGift color="#1447e6" size={24} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-[10px]">
            <p className=" border-black border-2 rounded-full py-[2px] px-[10px]">
              Makkah Hotel
            </p>
            <FaArrowRightLong />

            <p className=" border-black border-2 rounded-full py-[2px] px-[10px] bg-black text-white">
              {myPackage?.hotels?.length > 0 && myPackage?.hotels[0]}
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <p className=" border-black border-2 rounded-full py-[2px] px-[10px]">
              Madina Hotel
            </p>
            <FaArrowRightLong />

            <p className=" border-black border-2 rounded-full py-[2px] px-[10px] bg-black text-white">
              {myPackage?.hotels?.length > 1 && myPackage?.hotels[1]}
            </p>
          </div>
        </div>
        <p>For more details contact us @ 03352418380</p>
      </div>
    </div>
  );
};

export default Package;
