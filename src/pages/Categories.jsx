import { useState } from "react";
import GradientButton from "../components/GradientButton";
import { GiCancel } from "react-icons/gi";
import { MdDelete } from "react-icons/md";

const Categories = () => {
  const [showAddInfoPopUp, setshowAddInfoPopUp] = useState(false);

  return (
    <div className="p-4 w-full">
      <div className="flex flex-col gap-[30px] w-full">
        <div
          className="flex justify-center w-full"
          onClick={() => {
            setshowAddInfoPopUp(true);
          }}
        >
          <GradientButton text={"Add Categories"} />
        </div>
        <p className="text-[22px] font-black bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent">
          Categories
        </p>
        <div className="flex flex-col gap-[20px]">
          <div className="flex w-[40%] mx-auto items-center justify-between gap-[20px] font-bold bg-sky-100 rounded-lg py-[4px] px-[8px]">
            <p>Hajj</p>
            <div className="w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-lg bg-red-600">
              <MdDelete color="white" size={20} />
            </div>
          </div>
          <div className="flex w-[40%] mx-auto items-center justify-between gap-[20px] font-bold bg-sky-100 rounded-lg py-[4px] px-[8px]">
            <p>Umrah</p>
            <div className="w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-lg bg-red-600">
              <MdDelete color="white" size={20} />
            </div>
          </div>
        </div>
      </div>

      {showAddInfoPopUp && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/80 flex justify-center items-center">
          <div className="flex relative flex-col gap-[30px] w-[40%] bg-black rounded-lg p-[20px] text-white">
            <div
              className="absolute top-[20px] right-[20px] cursor-pointer"
              onClick={() => {
                setshowAddInfoPopUp(false);
              }}
            >
              <GiCancel color="white" size={30} />
            </div>
            <p className="font-bold text-center text-[22px]">Add Categories</p>
            <form className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Title</p>
                <input
                  type="text"
                  placeholder="Enter your category's title"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>

              <p className="rounded-full bg-gradient-to-r from-blue-700 to-blue-950  text-center py-[5px] px-[20px]  text-white font-bold cursor-pointer w-max mx-auto">
                Submit
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
