import { useState } from "react";
import GradientButton from "../components/GradientButton";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
const WebInfo = () => {
  const [showAddInfoPopUp, setshowAddInfoPopUp] = useState(false);
  const [description, setdescription] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setloading] = useState(false);

  const handleImageChange = (event) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setImages(selectedFiles);
    }
  };
  const createWebInfo = async () => {
    setloading(true);
    const imagesArray = await uploadImages();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_BASE_URL}/web-info/create-web-info`,
        {
          sliderImages: imagesArray,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("res : ", res);
      toast.success("Info created");
      setshowAddInfoPopUp(false);
      setImages("");
      setdescription("");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setloading(false);
  };

  const uploadImages = async () => {
    const cloudName = "dt5ptpcpm"; // Replace with your Cloudinary cloud name
    const uploadPreset = "using_cloudinary"; // Replace with your unsigned upload preset

    const uploadedUrls = [];

    for (const image of images) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", uploadPreset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        uploadedUrls.push(data.secure_url); // Get the uploaded image URL
      } catch (error) {
        console.error("Upload failed", error);
      }
    }

    return uploadedUrls;
  };

  return (
    <div className="p-4 w-full">
      <div className="flex flex-col gap-[30px] w-full ">
        <div
          className="flex justify-center w-full"
          onClick={() => {
            setshowAddInfoPopUp(true);
          }}
        >
          <GradientButton text={"Add web info"} />
        </div>
        <p className="text-[22px]  font-black bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent">
          Website&apos;s Description
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
          aliquid illum a quam aut reiciendis laudantium, fuga sit consequuntur
          facere, porro ex magnam placeat commodi architecto vero mollitia
          tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet ab aliquid illum a quam aut reiciendis laudantium, fuga sit
          consequuntur facere, porro ex magnam placeat commodi architecto vero
          mollitia tempore. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Eveniet ab aliquid illum a quam aut reiciendis laudantium, fuga
          sit consequuntur facere, porro ex magnam placeat commodi architecto
          vero mollitia tempore. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet ab aliquid illum a quam aut reiciendis
          laudantium, fuga sit consequuntur facere, porro ex magnam placeat
          commodi architecto vero mollitia tempore. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Eveniet ab aliquid illum a quam aut
          reiciendis laudantium, fuga sit consequuntur facere, porro ex magnam
          placeat commodi architecto vero mollitia tempore.
        </p>
      </div>
      <div className="flex flex-wrap gap-[20px] my-[30px] ">
        <img
          src="https://plus.unsplash.com/premium_photo-1670745800247-271e8977da41?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFkaW5haHxlbnwwfHwwfHx8MA%3D%3D"
          className="w-[200px] rounded-lg h-[200px] object-cover"
          alt=""
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1670745800247-271e8977da41?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFkaW5haHxlbnwwfHwwfHx8MA%3D%3D"
          className="w-[200px] rounded-lg h-[200px] object-cover"
          alt=""
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1670745800247-271e8977da41?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFkaW5haHxlbnwwfHwwfHx8MA%3D%3D"
          className="w-[200px] rounded-lg h-[200px] object-cover"
          alt=""
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1670745800247-271e8977da41?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFkaW5haHxlbnwwfHwwfHx8MA%3D%3D"
          className="w-[200px] rounded-lg h-[200px] object-cover"
          alt=""
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1670745800247-271e8977da41?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFkaW5haHxlbnwwfHwwfHx8MA%3D%3D"
          className="w-[200px] rounded-lg h-[200px] object-cover"
          alt=""
        />
      </div>
      <br />
      <br />
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
            <p className="font-bold text-center text-[22px]">Add Web Info</p>
            <form className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Description</p>
                <textarea
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your website's descrition"
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold">Images</p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="bg-sky-100 py-[10px] px-[15px] outline-none text-black"
                  onChange={handleImageChange}
                />
              </div>

              <p
                onClick={createWebInfo}
                className="rounded-full bg-gradient-to-r from-blue-700 to-blue-950  text-center py-[5px] px-[20px]  text-white font-bold cursor-pointer w-max mx-auto"
              >
                {loading ? (
                  <ClipLoader color="white" loading={loading} />
                ) : (
                  "Submit"
                )}
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebInfo;
