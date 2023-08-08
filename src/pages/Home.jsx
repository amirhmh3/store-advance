import { useCallback,useState,useEffect } from "react";
import Navigation from "../components/commen/Navigation";
import Slider from "./../components/home/Slider";
import SliderCategory from "./../components/home/SliderCategory";
import { getCategory } from "./../service/productService";

const Home = () => {

    const [category,setCategory]=useState([]);
    const getCategoryResponse=async ()=>{
        const data=await getCategory();
        setCategory(data.data.data);
    }

    useEffect(()=>{
        getCategoryResponse();
    },[])



    return ( <>
    <Navigation/>
    <Slider/>
    <SliderCategory category={category}/>
    </> );
}
 
export default Home;