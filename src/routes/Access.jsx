import { Route, Routes } from "react-router-dom";
import ProtectRout from "middleware/ProtectRout";
import Dashboard from "pages/Dashboard";
import Users from "pages/Users";
const Access = () => {
    return ( 
        <Routes>
        <Route path="/" element={<ProtectRout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/dashboard/users" element={<Users/>}/>
        </Route>
      </Routes>
     );
}
 
export default Access;