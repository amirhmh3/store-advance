import { useContext } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import { BiSolidChevronsRight } from "react-icons/bi";
import { CategotyContext } from "context/CategotyContext";
import img from "assets/image/img1.jpg";

const SliderCategory = () => {
  const { category } = useContext(CategotyContext);
  return (
    <div className="container mx-auto my-8">
      <Swiper
        className="mySwiper h-28 "
        modules={[Scrollbar, Autoplay]}
        spaceBetween={20}
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
        {!!category ? (
          category.map((c, index) => (
            <SwiperSlide key={index}>
              <Link to="/category">
              <div className="w-full h-full  border-1 rounded-3xl flex group">
                <div className="w-28 h-20 m-auto ml-5 p-3 rounded-3xl overflow-hidden bg-gray-300">
                  <img
                    className="w-full h-full rounded-xl group-hover:scale-150 duration-300 ease-out"
                    src={img}
                    alt=""
                  />
                </div>
                <div className="my-auto mx-5 flex w-full ">
                  <div className="w-full">
                    <h1 className="uppercase font-bold">{c.name}</h1>
                    <h5 className="flex items-center text-pink-650">
                      Show All
                      <BiSolidChevronsRight className="flex justify-center group-hover:w-12 duration-300 ease-out" />
                    </h5>
                  </div>
                  <p className="text-sm">({c.products.length})</p>
                </div>
              </div>
              </Link>
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
  );
};

export default SliderCategory;
