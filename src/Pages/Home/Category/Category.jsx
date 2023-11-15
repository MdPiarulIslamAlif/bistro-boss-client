import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitles from "../../../Components/SectionTitle/SectionTitles";

const Category = () => {
  return (
    <section>
      <SectionTitles
        subHeading={"From 11.00am to 10.pm"}
        heading={"order Online"}>
        </SectionTitles>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mb-24">
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            {" "}
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
