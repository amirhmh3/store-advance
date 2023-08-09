import { useCallback, useState, useEffect } from "react";
import Navigation from "../components/commen/Navigation";
import Slider from "./../components/home/Slider";
import SliderCategory from "./../components/home/SliderCategory";
import { getCategory } from "./../service/productService";
import { CategotyContext } from "./../context/CategotyContext";

const Home = () => {
  const [category, setCategory] = useState([]);
  const getCategoryResponse = async () => {
    const data = await getCategory();
    setCategory(data.data.data);
  };

  useEffect(() => {
    getCategoryResponse();
  }, []);

  return (
    <>
      <CategotyContext.Provider value={{ category }}>
        <Navigation category={category} />
        <Slider />
        <SliderCategory category={category} />
      </CategotyContext.Provider>
    </>
  );
};

export default Home;
