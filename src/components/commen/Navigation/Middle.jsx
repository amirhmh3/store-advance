import logo from "../../../assets/logo.png";
import { BiUser , BiHeart , BiCart,BiSearch} from "react-icons/bi";
const Middle = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-3 my-5">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full relative">
            <BiSearch className="absolute top-3 right-4 text-xl  hover:text-pink-650 duration-300"/>
            <input className="w-full border-1 border-gray-300 rounded-full h-10 capitalize px-5 focus:outline-gray-300 focus-within:border-gray-300" type="text" placeholder="enter your product name" />
          </div>
        </div>
        <div className="flex justify-end items-center">
            <BiUser className="text-4xl mx-2"/>
            <BiHeart className="text-4xl mx-2"/>
            <BiCart className="text-4xl mx-2"/>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Middle;
