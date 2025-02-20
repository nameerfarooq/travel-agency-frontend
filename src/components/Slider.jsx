// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <Swiper
      className="w-full"
      slidesPerView={1}
      navigation
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]} // Include required modules
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="!w-full !h-[500px] rounded-lg">
        <div className="w-full h-[500px] object-cover rounded-lg">
          <img
            className="w-full h-[500px] object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1568009167523-043c39300e67?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="!w-full !h-[400px] rounded-lg">
        <div className="w-full h-[400px] object-cover rounded-lg">
          <img
            className="w-full h-[500px] object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1667454872134-c25973237138?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="!w-full !h-[400px] rounded-lg">
        <div className="w-full h-[400px] object-cover rounded-lg">
          <img
            className="w-full h-[500px] object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1591604159758-680f22f77d24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
