import { useEffect, useState } from "react";
import GradientButton from "../components/GradientButton";
import { GiCancel } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import Switch from "react-switch";
import axios from "axios";
import { toast } from "react-toastify";

const Packages = () => {
  const [showAddInfoPopUp, setshowAddInfoPopUp] = useState(false);
  const [isDiscoundValid, setisDiscoundValid] = useState(false);
  const [categories, setcategories] = useState([]);
  const getAllCategories = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_APP_BACKEND_BASE_URL
        }/category/get-all-categories`
      );
      setcategories(res?.data?.categories);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="p-4 w-full">
      <div className="flex flex-col gap-[30px] w-full">
        <div
          className="flex justify-center w-full"
          onClick={() => {
            setshowAddInfoPopUp(true);
          }}
        >
          <GradientButton text={"Add Package"} />
        </div>
        <p className="text-[22px] font-black bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent">
          Packages
        </p>
        <div className="flex flex-col gap-[20px]">
          <div className="flex w-[40%] mx-auto items-center justify-between gap-[20px] font-bold bg-sky-100 rounded-lg py-[4px] px-[8px]">
            <p>Umrah Gold package</p>
            <div className="w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-lg bg-red-600">
              <MdDelete color="white" size={20} />
            </div>
          </div>
          <div className="flex w-[40%] mx-auto items-center justify-between gap-[20px] font-bold bg-sky-100 rounded-lg py-[4px] px-[8px]">
            <p>Hajj 2025 silver package</p>
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
            <p className="font-bold text-center text-[22px]">Add Package</p>
            <form className="flex flex-col gap-[20px] max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">name</p>
                <input
                  type="text"
                  placeholder="Enter your package's name"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Description</p>
                <input
                  type="text"
                  placeholder="Enter your package's description"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Price</p>
                <input
                  type="text"
                  placeholder="Enter your package's price"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Departure Date</p>
                <input
                  type="date"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Arrival Date</p>
                <input
                  type="date"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Discount Valid ?</p>
                <Switch
                  onChange={() => {
                    setisDiscoundValid(!isDiscoundValid);
                  }}
                  checked={isDiscoundValid}
                />
              </div>
              {isDiscoundValid && (
                <>
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-bold">Discount Percentage</p>
                    <input
                      type="text"
                      placeholder="Enter your package's discount percentage"
                      className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-bold">Discount Validity</p>
                    <input
                      type="date"
                      className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                    />
                  </div>
                </>
              )}
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Package Features</p>
                <div className="flex items-center gap-[6px]">
                  <div className="flex items-center gap-[3px]">
                    <input
                      type="checkbox"
                      className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                    />
                    <p>Tickets</p>
                  </div>
                  <div className="flex items-center gap-[3px]">
                    <input
                      type="checkbox"
                      className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                    />
                    <p>Visa</p>
                  </div>
                  <div className="flex items-center gap-[3px]">
                    <input
                      type="checkbox"
                      className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                    />
                    <p>transport</p>
                  </div>
                  <div className="flex items-center gap-[3px]">
                    <input
                      type="checkbox"
                      className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                    />
                    <p>food</p>
                  </div>
                  <div className="flex items-center gap-[3px]">
                    <input
                      type="checkbox"
                      className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                    />
                    <p>hotels</p>
                  </div>
                  <div className="flex items-center gap-[3px]">
                    <input
                      type="checkbox"
                      className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                    />
                    <p>gift</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Airline</p>
                <input
                  type="text"
                  placeholder="Enter your package's Airline"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Departure City</p>
                <input
                  type="text"
                  placeholder="Enter your package's departure city"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Makkah Hotel</p>
                <input
                  type="text"
                  placeholder="Enter your package's Makkah Hotel"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Madinah Hotel</p>
                <input
                  type="text"
                  placeholder="Enter your package's Madinah Hotel"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Category</p>
                <select
                  name=""
                  id=""
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                >
                  <option value="">Select</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category}>
                      {category.title}
                    </option>
                  ))}
                </select>
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

export default Packages;
