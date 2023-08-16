import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import img1 from "./../../assets/image/img1.jpg";
import { useEffect } from "react";
const SliderImage = ({ datas }) => {
  const [currentImg, setCurrentImg] = useState(!!datas.length?datas[0]:img1);

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-104 mb-5">
          <img
            className="w-full h-full"
            src={!!datas ? currentImg : img1}
            alt=""
          />
        </div>
        <div>
          <Swiper
            className="mySwiper h-28 "
            modules={[Scrollbar, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{ delay: 3000 }}
            scrollbar={{ draggable: true }}
          >
            {!!datas.length ? (
              datas.map((c, index) => (
                <SwiperSlide key={index}>
                  <div onClick={()=>{setCurrentImg(c)}} className="w-full h-full p-1 overflow-hidden flex group bg-gray-300">
                    <img className="w-full h-full" src={c} alt="" />
                  </div>
                </SwiperSlide>
              ))
            ) : (
                <>
                <SwiperSlide>
                <div  className="w-full h-full p-1 overflow-hidden flex group bg-gray-300">
                  <img className="w-full h-full" src={img1} alt="" />
                </div>
              </SwiperSlide>
              
                </>
                
              
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderImage;
