import { Link } from "react-router-dom";
const Bottom = () => {
    return ( <>
    <div className="container mx-auto text-center my-5 showb-lg">
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./home"}>Home</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./home"}>categories</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./home"}>products</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./home"}>pages</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./home"}>others</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./home"}>blog</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./home"}>elements</Link>
        <Link className="uppercase font-bold text-sm text-gray-600 mx-5 hover:text-pink-650 transition-all duration-300" to={"./home"}>hot offers</Link>
    </div>
    </> );
}
 
export default Bottom;