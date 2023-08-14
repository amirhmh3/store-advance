import Footer from "./../components/commen/Footer";
import Navigation from "./../components/commen/Navigation";
import { getCategory } from "./../service/productService";
import { useState, useEffect } from "react";
const MainLayout = ({children}) => {
    const [category, setCategory] = useState([]);

    const getCategoryResponse = async () => {
        try {
          const data = await getCategory();
          setCategory(data.data.data);
        } catch (error) {
          console.log(error.message);
        }
      };

      useEffect(() => {
        getCategoryResponse();
      }, []);

    return ( <>
    <Navigation category={category}/>
    {children}
    <Footer category={category}/>
    </> );
}
 
export default MainLayout;