/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ images }) => {
  return (
    <>
      {images?.length > 0 && (
        <Swiper
          className="w-full"
          slidesPerView={1}
          navigation
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]} // Include required modules
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="!w-full !h-[500px] rounded-lg">
              <div className="w-full h-[500px] object-cover rounded-lg">
                <img
                  className="w-full h-[500px] object-cover rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
