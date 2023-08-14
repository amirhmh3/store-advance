import Footer from "./../components/commen/Footer";
import Navigation from "./../components/commen/Navigation";
import { getCategory,getAllProducts } from "./../service/productService";
import { useState, useEffect } from "react";
const MainLayout = ({children}) => {
    const [category, setCategory] = useState([]);
    const [products, setProduct] = useState([]);

    const getCategoryResponse = async () => {
        try {
          const data = await getCategory();
          setCategory(data.data.data);
        } catch (error) {
          console.log(error.message);
        }
      };

    const getProductResponse = async () => {
        try {
          const data = await getAllProducts();
          setProduct(data.data.data);
        } catch (error) {
          console.log(error.message);
        }
      };

      useEffect(() => {
        getCategoryResponse();
        getProductResponse();
        // console.log(product);
      }, []);

    return ( <>
    <Navigation products={products} category={category}/>
    {children}
    <Footer category={category}/>
    </> );
}
 
export default MainLayout;