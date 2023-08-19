import { Route, Routes } from "react-router-dom";
import ProtectRout from "./../middleware/ProtectRout";
import Home from "pages/Home";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import ProductSingle from "pages/ProductSingle";
import Category from "pages/Category";
const Main = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products/:productId" element={<ProductSingle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectRout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
  );
};

export default Main;
