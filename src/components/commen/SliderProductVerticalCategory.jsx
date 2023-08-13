import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import { BiSolidStar } from "react-icons/bi";
import img from "./../../assets/image/img1.jpg";
const SliderProductVerticalCategory = ({groupProduct}) => {
    return ( 
        <Swiper
            className="mySwiper h-max mt-5"
            modules={[Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            scrollbar={{ draggable: true }}
          >
            
            {!!groupProduct ? (
              groupProduct.map((c, index) => (
                <SwiperSlide key={index}>
                  <Swiper
                  className="mySwiper2 swiper-v"
                  direction={"vertical"}
                  slidesPerView={4}
                >
                  {c.map((c,index)=>(
                    
                    <div key={index} className="w-full h-full flex group my-2">
                    <div className="w-48 h-full  p-3 rounded-xl overflow-hidden bg-gray-300">
                      <img
                        className="w-full h-20 rounded-xl group-hover:scale-150 duration-300 ease-out"
                        src={img}
                        alt=""
                      />
                    </div>
                    <div className="my-auto mx-5 flex w-full ">
                      <div className="w-full">
                        <h1 className="capitalize text-sm line-clamp-1">{c.title}</h1>
                        <div className="flex">
                          <BiSolidStar className="text-sm text-yellow-400" />
                          <BiSolidStar className="text-sm text-yellow-400" />
                          <BiSolidStar className="text-sm text-yellow-400" />
                          <BiSolidStar className="text-sm text-yellow-400" />
                          <BiSolidStar className="text-sm text-yellow-400" />
                        </div>
                        <div className="flex">
                          <h3 className="text-sm mt-2 text-gray-600 line-through line-clamp-1">${c.price}.00</h3>
                          <h2 className="mx-5 mt-2 text-sm font-bold line-clamp-1">${c.price-15}.00</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                  
                  </Swiper>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="w-full h-full bg-gray-300 text-center">
                  don't category
                </div>
              </SwiperSlide>
            )}
          </Swiper>
     );
}
 
export default SliderProductVerticalCategory;