import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import PackageCard from "../components/PackageCard";
import Slider from "../components/Slider";
import axios from "axios";

const LandingPage = () => {
  const [webInfo, setwebInfo] = useState("");
  const [allCategories, setallCategories] = useState("");
  const [packages, setpackages] = useState("");
  const getWebInfo = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_BACKEND_BASE_URL}/web-info/get-web-info`
    );

    setwebInfo(res?.data?.webInfo);
  };
  const getAllCategories = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_BACKEND_BASE_URL}/category/get-all-categories`
    );
    setallCategories(res?.data?.categories);
  };

  const getAllPackages = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_BACKEND_BASE_URL}/package/get-all-packages`
    );
    setpackages(res?.data?.packages);
    console.log("packages : ", res?.data?.packages);
  };

  useEffect(() => {
    getWebInfo();
    getAllCategories();
    getAllPackages();
  }, []);

  return (
    <div className="flex flex-col gap-[40px] px-[20px] pb-[40px]">
      <div className="flex w-[80%] mx-auto my-[20px] rounded-lg">
        <Slider images={webInfo?.sliderImages} />
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <p className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent font-black italic text-[36px]">
          Madina Travels
        </p>
        <p className="text-center sm:w-[80%]">{webInfo?.description}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <p
          id="services"
          className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent font-black italic text-[36px]"
        >
          Our Services
        </p>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {allCategories.length > 0 && (
            <>
              {allCategories.map((category) => (
                <CategoryCard key={category._id} title={category.title} />
              ))}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <p
          id="packages"
          className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent font-black italic text-[36px]"
        >
          Our Packages
        </p>
        <div className="flex items-center justify-center gap-[40px] flex-wrap">
          {packages.length > 0 && (
            <>
              {packages.map((packageItem) => (
                <PackageCard key={packageItem._id} packageDetails={packageItem}/>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <p
          id="contact"
          className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent font-black italic text-[36px]"
        >
          Contact Us
        </p>
        <div className="flex items-center justify-center gap-[40px] flex-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d115766.93416211127!2d66.96449802664718!3d24.941719455152263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d24.9814164!2d66.9845976!4m5!1s0x3eb338c700571b09%3A0xd86779b29e77f36a!2sST-13%20Abul%20Hasan%20Isphahani%20Rd%2C%20Block%207%20Gulshan-e-Iqbal%2C%20Karachi%2C%2075300!3m2!1d24.9277448!2d67.1088845!5e0!3m2!1sen!2s!4v1740088169392!5m2!1sen!2s"
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
