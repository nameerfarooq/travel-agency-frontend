import { useEffect, useState } from "react";
import GradientButton from "../components/GradientButton";
import { GiCancel } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";

const Categories = () => {
  const [showAddInfoPopUp, setshowAddInfoPopUp] = useState(false);
  const [newCategory, setnewCategory] = useState("");
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
  const deleteThisCategory = async (categoryId) => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_APP_BACKEND_BASE_URL
        }/category/delete-category/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Deleted");
      const newCategories = categories.filter(
        (category) => category._id !== categoryId
      );
      setcategories(newCategories);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const createCategory = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_BASE_URL}/category/create-category`,
        {
          title: newCategory,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Created");
      getAllCategories();
      setnewCategory("");
      setshowAddInfoPopUp(false);
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
          <GradientButton text={"Add Categories"} />
        </div>
        <p className="text-[22px] font-black bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent">
          Categories
        </p>
        <div className="flex flex-col gap-[20px]">
          {categories.length > 0 && (
            <>
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="flex w-[40%] mx-auto items-center justify-between gap-[20px] font-bold bg-sky-100 rounded-lg py-[4px] px-[8px]"
                >
                  <p>{category?.title}</p>
                  <div
                    onClick={() => deleteThisCategory(category._id)}
                    className="w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-lg bg-red-600"
                  >
                    <MdDelete color="white" size={20} />
                  </div>
                </div>
              ))}
            </>
          )}
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
                  value={newCategory}
                  onChange={(e) => {
                    setnewCategory(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your category's title"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>

              <p
                onClick={createCategory}
                className="rounded-full bg-gradient-to-r from-blue-700 to-blue-950  text-center py-[5px] px-[20px]  text-white font-bold cursor-pointer w-max mx-auto"
              >
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
