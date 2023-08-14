import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import groupDataUtil  from "../../utility/groupData";
import img from "./../../assets/image/img1.jpg";
import spinner from "./../../assets/gif/spinner.gif";
const SliderProductVertical = ({ datas,loding }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(groupDataUtil(datas,4));
  }, [datas]);
  return (
    <>
      <div className="w-full h-full">
        <Swiper
          className="mySwiper h-max "
          modules={[Scrollbar, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          scrollbar={{ draggable: true }}
        >
          {!!loding?<img src={spinner}></img>:!!data ? (
            data.map((d, index) => (
              <SwiperSlide key={index} className="h-max">
                <Swiper
                  className="mySwiper2 swiper-v"
                  direction={"vertical"}
                >
                  {d.map((d, index) => (
                    <div
                      key={index}
                      className="w-full h-full p-4  border-1 rounded-3xl my-2 flex"
                    >
                      <div className="w-24 h-20 m-auto ml-2 rounded-3xl overflow-hidden ">
                        <img
                          className="w-full h-full rounded-xl group-hover:scale-150 duration-300 ease-out"
                          src={img}
                          alt=""
                        />
                      </div>
                      <div className="w-full pl-4">
                      <h1 className="line-clamp-1 font-bold">{d.title}</h1>
                      <h3 className="line-clamp-1 text-sm text-gray-600">{d.slug}</h3>
                      <h5 className="text-pink-650">${d.price-15}.00<span className="text-sm ml-2 text-gray-600 line-through">${d.price}.00</span></h5>
                      </div>
                      
                    </div>
                  ))}
                </Swiper>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="flex justify-center w-max h-full text-center">
                don't products
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default SliderProductVertical;
