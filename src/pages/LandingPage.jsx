import CategoryCard from "../components/CategoryCard";
import PackageCard from "../components/PackageCard";
import Slider from "../components/Slider";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-[40px] px-[20px] pb-[40px]">
      <div className="flex w-[80%] mx-auto my-[20px] rounded-lg">
        <Slider />
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <p className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent font-black italic text-[36px]">
          Madina Travels
        </p>
        <p className="text-center sm:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam ea
          itaque maiores non, officia aspernatur, ipsam id vero voluptatum quod
          ipsa alias recusandae dolorum laborum impedit quos doloremque harum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam ea
          itaque maiores non, officia aspernatur, ipsam id vero voluptatum quod
          ipsa alias recusandae dolorum laborum impedit quos doloremque harum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam ea
          itaque maiores non, officia aspernatur, ipsam id vero voluptatum quod
          ipsa alias recusandae dolorum laborum impedit quos doloremque harum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam ea
          itaque maiores non, officia aspernatur, ipsam id vero voluptatum quod
          ipsa alias recusandae dolorum laborum impedit quos doloremque harum.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <p
          id="services"
          className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent font-black italic text-[36px]"
        >
          Our Services
        </p>
        <div className="flex items-center justify-center gap-5">
          <CategoryCard title={"Hajj"} />
          <CategoryCard title={"Umrah"} />
          <CategoryCard title={"Tour"} />
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
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
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
