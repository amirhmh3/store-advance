import { useState, useEffect } from "react";
import Navigation from "../components/commen/Navigation";
import { getCategory,getAllProducts } from "./../service/productService";
import { CategotyContext } from "./../context/CategotyContext";
import { SliderProductVertical,SidbarCategory,SliderCategory,Slider } from "../components/home";
import SliderProductVerticalCategory from "./../components/commen/SliderProductVerticalCategory";
import groupData from "../utility/groupData";
const Home = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const groupProduct=groupData(products,4);
  const getCategoryResponse = async () => {
    const data = await getCategory();
    setCategory(data.data.data);
  };
  const getProductsResponse = async () => {
    const data = await getAllProducts();
    setProducts(data.data.data);
  };

  useEffect(() => {
    getCategoryResponse();
    getProductsResponse();
  }, []);

  return (
    <>
      <CategotyContext.Provider value={{ category,products }}>
        <Navigation category={category} />
        <Slider />
        <SliderCategory category={category} />
      </CategotyContext.Provider>

      <div className="container mx-auto mt-5 grid grid-cols-4">

        <div className="showb-lg">
        <div className="w-full h-max border-1 rounded-2.5 p-5 lg:col-span-1 sm:col-span-2">
          <SidbarCategory category={category}/>
        </div>
        <h1 className="uppercase font-bold text-gray-700 w-full mt-5 showb-lg">
            best sellers
          </h1>
        <SliderProductVerticalCategory groupProduct={groupProduct}/>
        </div>


        <div className="w-full lg:h-max h-75 overflow-hidden px-5 lg:col-span-1 sm:col-span-2 col-span-4">
          <div className="flex">
            <h1 className="font-bold text-gray-700 text-xl mb-5">
              New Arrivals
            </h1>
          </div>
          <hr />
          <SliderProductVertical
            datas={products}
          />
        </div>
        <div className="w-full lg:h-max h-75 overflow-hidden px-5 lg:col-span-1 sm:col-span-2 col-span-4">
          <div className="flex">
            <h1 className="font-bold text-gray-700 text-xl mb-5">Trending</h1>
          </div>
          <hr />
          <SliderProductVertical
            datas={products}
          />
        </div>
        <div className="lg:w-full sm:w-96 w-full mx-auto lg:h-max h-75 overflow-hidden px-5 lg:col-span-1 col-span-4 ">
          <div className="flex">
            <h1 className="font-bold text-gray-700 text-xl mb-5">Top Rated</h1>
          </div>
          <hr />
          <SliderProductVertical
            datas={products}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
