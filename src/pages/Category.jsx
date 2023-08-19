import { useState,useEffect } from "react";
import { Sidbar , GridProduct} from "componets/category";
import { getCategory, getAllProducts} from "./../service/productService";
import { BiGridAlt, BiListUl } from "react-icons/bi";
import MainLayout from "layouts/MainLayout";
const Category = () => {
  const [category,setCategory]=useState([]);
  const [lodingCategory,setLodingCategory]=useState(false)
  const [product,setProduct]=useState([]);
  const [lodingProduct,setLodingProduct]=useState(false)
  const [select,setSelect]=useState(true);
  const getCategoryData=async()=>{
    try {
      setLodingCategory(true);
    const responce=await getCategory();
    setCategory(responce.data.data)
    } catch (error) {
      console.log(error.message);
    }finally{
      setLodingCategory(false);
    }
  }

  const getProductData=async()=>{
    try {
      setLodingProduct(true);
    const responce=await getAllProducts();
    setProduct(responce.data.data);
    } catch (error) {
      console.log(error.message);
    }finally{
      setLodingProduct(false);
    }
  }

  useEffect(()=>{
    getCategoryData();
    getProductData();
  },[])
  return (
    <MainLayout>
      <div className="container my-16 mx-auto">
        <div className="grid grid-cols-5">
          <div className="lg:col-span-4 col-span-5 mx-5">
            <div className="flex w-full  p-2  ">
              <div className="flex w-full justify-between p-2 lg:mx-0 sm:mx-4 rounded-md bg-gray-200">
                <div className="flex ">
                  <div className="flex justify-center items-center  text-white w-8 h-8 text-2xl mr-2 bg-pink-650">
                    <BiGridAlt />
                  </div>
                  <div className="flex justify-center items-center text-black w-8 h-8 text-2xl ml-2 bg-white">
                    <BiListUl />
                  </div>
                </div>
                <div className="flex items-center text-gray-500">
                  <h2>Sort by</h2>
                  <select className="ml-3 h-full">
                    <option {...select??selected} disabled>
                      Position
                    </option>
                    <option value="1">Relevance</option>
                    <option value="2">Name, A to Z</option>
                    <option value="3">Name, Z to A</option>
                    <option value="4">Price, low to high</option>
                    <option value="5">Price, high to low</option>
                  </select>
                </div>
              </div>
            </div>

            <GridProduct products={product} loding={lodingProduct}/>
          </div>
          <div className="w-full lg:col-span-1 col-span-5 lg:px-0 px-5">
            <Sidbar category={category} loding={lodingCategory}/>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Category;
