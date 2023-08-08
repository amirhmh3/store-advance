import {useState} from "react"
import { BiLogoInstagram, BiLogoFacebook ,BiLogoTwitter,BiLogoLinkedin,BiSolidDownArrow} from "react-icons/bi";
const Top = () => {
    const [Currency,setCurrency]=useState(false);
    const [Language,setLanguage]=useState(false);
    const open="absolute top-8 bg-white z-50 rounded-3xl p-3 border-2 w-full transition-all duration-300";
    const close="absolute top-8 bg-white z-50 rounded-3xl p-3 border-2 w-full transition-all duration-300  hidden";
  return (
    <>
      <div className="container mx-auto grid grid-cols-3">
        <div className="flex justify-start items-center">
          <i className="p-1 m-2 bg-gray-100 text-gray-500 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-300 cursor-pointer">
            <BiLogoFacebook />
          </i>
          <i className="p-1 m-2 bg-gray-100 text-gray-500 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-pointer">
            <BiLogoTwitter />
          </i>
          <i className="p-1 m-2 bg-gray-100 text-gray-500 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 cursor-pointer">
            <BiLogoInstagram />
          </i>
          <i className="p-1 m-2 bg-gray-100 text-gray-500 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
            <BiLogoLinkedin />
          </i>
        </div>
        <div className="flex justify-center items-center uppercase text-sm">
        Free Shipping
        <span className="text-gray-600 uppercase px-1">This Week Order Over - $75 </span>
        </div>
        <div className="flex justify-end">
        <div className="w-max flex relative">
        <button onClick={()=>setCurrency(!Currency)} className="dropdown-toggle uppercase flex items-center text-sm text-gray-500" data-bs-toggle="dropdown" aria-expanded="false">Currency <BiSolidDownArrow className="mx-2"/></button>
        <ul className={Currency?open:close}>
                                    <li className="active border-b-2"><a className="dropdown-item" href="#">USD $</a></li>
                                    <li><a className="dropdown-item" href="#">EUR €</a></li>
                                </ul>
        </div>

        <div className="w-max flex relative">
        <button onClick={()=>setLanguage(!Language)} className="dropdown-toggle uppercase flex items-center text-sm text-gray-500" data-bs-toggle="dropdown" aria-expanded="false">Language  <BiSolidDownArrow className="mx-2"/></button>
        <ul className={Language?open:close}>
                                    <li className="active"><a className="dropdown-item" href="#">English</a></li>
                                    <li className="border-t-2"><a className="dropdown-item" href="#">Italiano</a></li>
                                </ul>
        </div>

                                
        </div>
      </div>
      <hr/>
    </>
  );
};

export default Top;
