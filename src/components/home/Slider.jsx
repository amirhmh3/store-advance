import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import img1 from "./../../assets/image/img1.jpg";
import img2 from "./../../assets/image/img2.jpg";
import img3 from "./../../assets/image/img3.jpg";
import './Slider.css'
import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <div className="container mx-auto my-5">
      <Swiper
    className="mySwiper 2xl:h-152 xl:h-152 lg:h-152 rounded-4xl mx-5"
    modules={[Pagination, Scrollbar, A11y,Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{delay:5000}}
    pagination={{ clickable: true ,
      renderBullet: function (index, className) {
        console.log(className);
        return '<span class="' + className + ' bg-black opacity-100 w-5 h-5 rounded-lg ">' +'</span>';
      },
    }}
    scrollbar={{ draggable: true }}
    >
      <SwiperSlide><img className="w-full h-full" src={img1} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-full" src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-full" src={img3} alt="" /></SwiperSlide>

    </Swiper>
    </div>
  );
};

export default Slider;
