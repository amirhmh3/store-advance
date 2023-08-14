import { Navigate,Outlet } from "react-router-dom";
const ProtectRout = ({component:Component,...restProps}) => {
    const isAuth = localStorage.getItem('token');
    return isAuth ? <Outlet/>:<Navigate to='/login'/>
}
 
export default ProtectRout;