import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import {SidbarCategory} from "./../components/commen";
import {SliderProductVertical,SliderImage,ProductDetails,ProductDescription,ProductsRlated} from "./../components/productSingle";
import { getBestProducts,getCategory,getProductById } from "service/productService";
const ProductSingle = () => {
    const { productId } = useParams();
    const [bastProduct,setBastProduct]=useState([]);
    const [Product,setProduct]=useState([]);
    const [category,setCategory]=useState([]);
    const [lodingProduct,setLodingProduct]=useState(false);
    const [lodingProductSingle,setLodingProductSingle]=useState(false);
    const [lodingCategory,setLodingCategory]=useState(false);
    
    const getBastProduct=async()=>{
       try {
        setLodingProduct(true);
        const data=await getBestProducts();
        setBastProduct(data.data.data);
       } catch (error) {
        console.log(error.message);
       }
       finally{
        setLodingProduct(false);
       }
    }

    const getProduct=async()=>{
       try {
        setLodingProductSingle(true);
        const data=await getProductById(productId);
        setProduct(data.data.data);
       } catch (error) {
        console.log(error.message);
       }
       finally{
        setLodingProductSingle(false);
       }
    }

    const getCategorys=async()=>{
       try {
        setLodingCategory(true);
        const data=await getCategory();
        setCategory(data.data.data);
       } catch (error) {
        console.log(error.message);
       }
       finally{
        setLodingCategory(false);
       }
    }

    useEffect(()=>{
        getBastProduct();
        getCategorys();
        getProduct();
    },[])

    return ( <MainLayout>
        <div className="py-4 bg-[#f7f7f7] ">
            <div className="container mx-auto grid grid-cols-2">
            <h1 className="font-bold">SingleProduct</h1>
            <h3 className="flex justify-end">Home {">>"} <span className="text-blue-500">Products</span></h3>
            </div>
        </div>
    <div className="w-screen container relative mx-auto my-12 grid grid-cols-4">
        <div className="lg:col-span-3 col-span-4">
            <div className="grid grid-cols-5">
                <div className="md:col-span-2 sm:col-span-5 col-span-5">
                    <SliderImage datas={["https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80","https://media.istockphoto.com/id/137893309/photo/yoga-meditation-at-sunset.jpg?s=612x612&w=0&k=20&c=dR8z9YSFAQI2_VNrHqLZh878crGjgjy2RqI4uXkcnMY="]}/>
                </div>
                <div className="md:col-span-3 sm:col-span-5 col-span-5">
                    <ProductDetails product={Product} loding={lodingProductSingle} />
                </div>
            </div>
            <ProductDescription/>

        </div>
        {/* start sidbar */}
        <div className="showf-lg flex-col relative">
            <div className="static">
          <div className="w-full h-max border-1 rounded-2.5 p-5 ">
            <SidbarCategory category={category} loding={lodingCategory}/>
          </div>
          <h1 className="uppercase font-bold text-gray-700 w-full mt-5 showf-lg">
            best sellers
          </h1>
          <SliderProductVertical datas={bastProduct} loding={lodingProduct} />
          </div>
        </div>
        {/* end sidbar */}
        </div>

        <div className="container py-12 mx-auto text-center">
            <ProductsRlated products={bastProduct.slice(0,4)} loding={lodingProduct}/>
        </div>
        
    
    </MainLayout> );
}
 
export default ProductSingle;