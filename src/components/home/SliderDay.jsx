import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";
import { TimerBoxOff } from "../home";
import React from "react";
import img1 from "assets/image/img1.jpg";
import img2 from "assets/image/img2.jpg";
import img3 from "assets/image/img3.jpg";
import "./Slider.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { BiSolidStar } from "react-icons/bi";
const SliderDay = () => {
  return (
    <>
      <Swiper
        className="mySwiper h-max rounded-2.5 border-1"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        scrollbar={{ draggable: true }}
      >

<SwiperSlide>
          <div className="sm:p-7 p-2 grid lg:grid-cols-5 md:grid-cols-4 bg-white">
            <div className="md:w-104 w-full md:!h-104 lg:!h-104 !h-104 lg:col-span-3 md:col-span-2">
            <img className="w-full h-full lg:col-span-3 md:col-span-2" src={img1} alt="" />
            </div>
            
            <div className="sm:pl-7 pl-0 w-full lg:col-span-2 md:col-span-2">
              <div className="flex md:m-0 mt-5">
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
              </div>
              <h1 className="uppercase font-bold text-sm my-3">
                Rose Gold diamonds earring
              </h1>
              <p className="2xl:w-96 xl:w-full lg:w-full md:w-full text-gray-500 line-clamp-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                totam ad, sint voluptas earum animi neque rem id possimus illum
                ex et in sapiente dicta atque provident! Voluptatum, mollitia
                consequuntur?
              </p>
              <h4 className="my-5 text-pink-650 text-xl font-bold">
                $1990.00{" "}
                <span className="line-through text-xl text-gray-500 ml-3 font-normal">
                  $2000.00
                </span>
              </h4>
              <a
                href="#"
                className="w-max uppercase px-8 py-3 bg-pink-650 rounded-2xl text-sm text-white font-bold my-7 block hover:bg-gray-700 duration-300"
              >
                add to cart
              </a>
              <div className="w-full flex my-2">
                <h2 className="uppercase w-2/3 text-sm">already sold:<span className="font-bold mx-1">{15}</span></h2>
                <h2 className="uppercase w-1/3 text-sm text-center">available:<span className="font-bold mx-1">{40}</span></h2>
              </div>
              <div className="h-2 w-full bg-neutral-200 dark:bg-gray-100 rounded-sm flex items-center">
                <div className="h-1 bg-pink-650 w-1/3 mx-1 rounded-sm"></div>
              </div>
              <h1 className="uppercase my-3">hurry up! offer ends in :</h1>
              <TimerBoxOff startDay={281}
              startHour={23}
              startMinute={5}
              startSecond={0}/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sm:p-7 p-2 grid lg:grid-cols-5 md:grid-cols-4 bg-white">
            <div className="md:w-104 w-full md:!h-104 lg:!h-104 !h-104 lg:col-span-3 md:col-span-2">
            <img className="w-full h-full lg:col-span-3 md:col-span-2" src={img2} alt="" />
            </div>
            
            <div className="sm:pl-7 pl-0 w-full lg:col-span-2 md:col-span-2">
              <div className="flex md:m-0 mt-5">
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
              </div>
              <h1 className="uppercase font-bold text-sm my-3">
                Rose Gold diamonds earring
              </h1>
              <p className="2xl:w-96 xl:w-full lg:w-full md:w-full text-gray-500 line-clamp-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                totam ad, sint voluptas earum animi neque rem id possimus illum
                ex et in sapiente dicta atque provident! Voluptatum, mollitia
                consequuntur?
              </p>
              <h4 className="my-5 text-pink-650 text-xl font-bold">
                $1990.00{" "}
                <span className="line-through text-xl text-gray-500 ml-3 font-normal">
                  $2000.00
                </span>
              </h4>
              <a
                href="#"
                className="w-max uppercase px-8 py-3 bg-pink-650 rounded-2xl text-sm text-white font-bold my-7 block hover:bg-gray-700 duration-300"
              >
                add to cart
              </a>
              <div className="w-full flex my-2">
                <h2 className="uppercase w-2/3 text-sm">already sold:<span className="font-bold mx-1">{15}</span></h2>
                <h2 className="uppercase w-1/3 text-sm text-center">available:<span className="font-bold mx-1">{40}</span></h2>
              </div>
              <div className="h-2 w-full bg-neutral-200 dark:bg-gray-100 rounded-sm flex items-center">
                <div className="h-1 bg-pink-650 w-1/3 mx-1 rounded-sm"></div>
              </div>
              <h1 className="uppercase my-3">hurry up! offer ends in :</h1>
              <TimerBoxOff startDay={281}
              startHour={23}
              startMinute={5}
              startSecond={0}/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sm:p-7 p-2 grid lg:grid-cols-5 md:grid-cols-4 bg-white">
            <div className="md:w-104 w-full md:!h-104 lg:!h-104 !h-104 lg:col-span-3 md:col-span-2">
            <img className="w-full h-full lg:col-span-3 md:col-span-2" src={img3} alt="" />
            </div>
            
            <div className="sm:pl-7 pl-0 w-full lg:col-span-2 md:col-span-2">
              <div className="flex md:m-0 mt-5">
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
                <BiSolidStar className="text-lg text-yellow-400" />
              </div>
              <h1 className="uppercase font-bold text-sm my-3">
                Rose Gold diamonds earring
              </h1>
              <p className="2xl:w-96 xl:w-full lg:w-full md:w-full text-gray-500 line-clamp-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                totam ad, sint voluptas earum animi neque rem id possimus illum
                ex et in sapiente dicta atque provident! Voluptatum, mollitia
                consequuntur?
              </p>
              <h4 className="my-5 text-pink-650 text-xl font-bold">
                $1990.00{" "}
                <span className="line-through text-xl text-gray-500 ml-3 font-normal">
                  $2000.00
                </span>
              </h4>
              <a
                href="#"
                className="w-max uppercase px-8 py-3 bg-pink-650 rounded-2xl text-sm text-white font-bold my-7 block hover:bg-gray-700 duration-300"
              >
                add to cart
              </a>
              <div className="w-full flex my-2">
                <h2 className="uppercase w-2/3 text-sm">already sold:<span className="font-bold mx-1">{15}</span></h2>
                <h2 className="uppercase w-1/3 text-sm text-center">available:<span className="font-bold mx-1">{40}</span></h2>
              </div>
              <div className="h-2 w-full bg-neutral-200 dark:bg-gray-100 rounded-sm flex items-center">
                <div className="h-1 bg-pink-650 w-1/3 mx-1 rounded-sm"></div>
              </div>
              <h1 className="uppercase my-3">hurry up! offer ends in :</h1>
              <TimerBoxOff startDay={281}
              startHour={23}
              startMinute={5}
              startSecond={0}/>
            </div>
          </div>
        </SwiperSlide>

        

      </Swiper>
    </>
  );
};

export default SliderDay;
