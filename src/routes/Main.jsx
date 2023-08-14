import { Route, Routes } from "react-router-dom";
import ProtectRout from "./../middleware/ProtectRout";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Dashboard from "../pages/Dashboard";
const Main = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectRout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        
        
        {/* <ProtectRout path="/login" component={Login} /> */}
      </Routes>
  );
};

export default Main;
