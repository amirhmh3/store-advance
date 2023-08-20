import { useState, useEffect } from "react";
// import Navigation from "../components/commen/Navigation";
import MainLayout from "layouts/MainLayout";
import { getCategory, getAllProducts } from "service/productService";
import { CategotyContext } from "context/CategotyContext";
import {
  SliderProductVertical,
  SliderCategory,
  Slider,
  SliderDay,
  ProductTabLayout
} from "../components/home";
import {SidbarCategory} from "./../components/commen";
import SliderProductVerticalCategory from "./../components/commen/SliderProductVerticalCategory";
import groupData from "utility/groupData";
const Home = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [lodingProduct,setLodingProduct]=useState(false);
  const [lodingCategory,setLodingCategory]=useState(false);
  const groupProduct = groupData(products, 4);
  const getCategoryResponse = async () => {
    try {
      setLodingCategory(true)
      const data = await getCategory();
      setCategory(data.data.data);
    } catch (error) {
      console.log(error.message);
    }
    finally{
      setLodingCategory(false);
    }
    
    
  };
  const getProductsResponse = async () => {

    try {
      setLodingProduct(true)
      const data = await getAllProducts();
      setProducts(data.data.data);
    } catch (error) {
      console.log(error.message);
    }
    finally{
      
      setLodingProduct(false);
    }
  };

  useEffect(() => {
    getCategoryResponse();
    getProductsResponse();
  }, []);

  return (
    <>
    <MainLayout>
      <CategotyContext.Provider value={{ category, products }}>
      
        
        <Slider />
        <SliderCategory category={category} />
      

      <div className="container relative mx-auto mt-5 grid grid-cols-4">
        {/* start sidbar */}
        <div className="showb-lg">
          <div className="w-full h-max border-1 rounded-2.5 p-5 lg:col-span-1 sm:col-span-2 ">
            <SidbarCategory category={category} loding={lodingCategory}/>
          </div>
          <h1 className="uppercase font-bold text-gray-700 w-full mt-5 showb-lg">
            best sellers
          </h1>
          <SliderProductVerticalCategory groupProduct={groupProduct} loding={lodingCategory}/>
        </div>
        {/* end sidbar */}

        <div className="grid lg:grid-cols-3 grid-cols-4 lg:col-span-3 col-span-4 w-full">
          <div className="grid lg:grid-cols-3 grid-cols-4 lg:col-span-3 col-span-4 w-full">
            <div className="w-full lg:h-max h-75 overflow-hidden px-5 lg:col-span-1 sm:col-span-2 col-span-4">
              <div className="flex">
                <h1 className="font-bold text-gray-700 text-xl mb-5">
                  New Arrivals
                </h1>
              </div>
              <hr />
              <SliderProductVertical datas={products} loding={lodingProduct}/>
            </div>
            <div className="w-full lg:h-max h-75 overflow-hidden px-5 lg:col-span-1 sm:col-span-2 col-span-4">
              <div className="flex">
                <h1 className="font-bold text-gray-700 text-xl mb-5">
                  Trending
                </h1>
              </div>
              <hr />
              <SliderProductVertical datas={products} loding={lodingProduct}/>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto lg:h-max h-75 overflow-hidden px-5 lg:col-span-1 col-span-4 ">
              <div className="flex">
                <h1 className="font-bold text-gray-700 text-xl mb-5">
                  Top Rated
                </h1>
              </div>
              <hr />
              <SliderProductVertical datas={products} loding={lodingProduct}/>
            </div>
          </div>

          <div className="grid grid-cols-4  col-span-4 w-full mt-5">
            <div className="w-full mx-auto h-max overflow-hidden px-5  col-span-4 ">
              <div className="flex">
                <h1 className="font-bold text-gray-700 text-xl mb-5">
                  Deal of The Day
                </h1>
              </div>
              <hr className="mb-5" />
              <SliderDay />
            </div>
          </div>


          <div className="grid grid-cols-4 col-span-4 w-full mt-5">
            <div className="w-full mx-auto h-max overflow-hidden px-5  col-span-4 ">
                <ProductTabLayout products={products} loding={lodingProduct}/>
                
            </div>
          </div>


        </div>
      </div>
      
      </CategotyContext.Provider>
      </MainLayout>
    </>
  );
};

export default Home;
