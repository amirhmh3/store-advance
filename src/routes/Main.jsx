import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Access from "./Access";
import ProductSingle from "pages/ProductSingle";
import Category from "pages/Category";
const Main = () => {
  return (
      <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products/:productId" element={<ProductSingle />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Access/>
      
      </>
  );
};

export default Main;
