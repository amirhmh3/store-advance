import { Link } from "react-router-dom";
const Bottom = () => {
    return ( <>
    <div className="container mx-auto text-center my-5 showb-lg">
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./"}>Home</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./category"}>categories</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./"}>products</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./"}>pages</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./"}>others</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./"}>blog</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./"}>elements</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./"}>hot offers</Link>
    </div>
    </> );
}
 
export default Bottom;