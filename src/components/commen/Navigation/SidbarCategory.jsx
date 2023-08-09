import { BiX, BiPlusMedical, BiSolidStar } from "react-icons/bi";
import { CategotyContext } from "./../../../context/CategotyContext";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import img from "./../../../assets/image/img1.jpg";
const SidbarCategory = ({handelOpenCategory}) => {
  const { category } = useContext(CategotyContext);
  return (
    <>
      <div className=" mx-auto h-full w-full bg-white overflow-y-scroll">
        <div className="p-5">
        <div className="flex">
          <h1 className="uppercase font-bold text-gray-700 w-full">category</h1>
          <BiX onClick={handelOpenCategory} className="text-3xl text-gray-700" />
        </div>
        <div className="my-3 mx-2">
          {!!category &&
            category.map((c, index) => (
              <div className="flex items-center">
                <h1 className="capitalize w-full text-gray-700 my-1">
                  {c.name}
                </h1>
                <BiPlusMedical className="text-xs  text-gray-600" />
              </div>
            ))}
        </div>
        <div>

        </div>
        <div className="">
          <h1 className="uppercase font-bold text-gray-700 w-full">
            best sellers
          </h1>
          <Swiper
            className="mySwiper h-28 mt-5"
            modules={[Scrollbar, Autoplay]}
            spaceBetween={50}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              769: {
                // width: 768,
                slidesPerView: 3,
              },
              1025: {
                slidesPerView: 4,
              },
            }}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            scrollbar={{ draggable: true }}
          >
            {console.log(category)}
            {!!category ? (
              category.map((c, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full  border-1 rounded-2xl flex group">
                    <div className="w-48 h-full  p-3 rounded-xl overflow-hidden bg-gray-300">
                      <img
                        className="w-full h-20 rounded-xl group-hover:scale-150 duration-300 ease-out"
                        src={img}
                        alt=""
                      />
                    </div>
                    <div className="my-auto mx-5 flex w-full ">
                      <div className="w-full">
                        <h1 className="capitalize text-sm">{c.name}</h1>
                        <div className="flex">
                          <BiSolidStar className="text-sm text-yellow-400" />
                          <BiSolidStar className="text-sm text-yellow-400" />
                          <BiSolidStar className="text-sm text-yellow-400" />
                          <BiSolidStar className="text-sm text-yellow-400" />
                          <BiSolidStar className="text-sm text-yellow-400" />
                        </div>
                        <div className="flex">
                          <h3 className="text-sm mt-2 text-gray-600 line-through">$50</h3>
                          <h2 className="mx-5 mt-2 text-sm font-bold ">$35</h2>
                        </div>
                      </div>
                    </div>
                  </div>
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
        </div>
        </div>
      </div>
    </>
  );
};

export default SidbarCategory;
