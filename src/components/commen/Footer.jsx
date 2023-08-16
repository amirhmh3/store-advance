import { BiMap,BiSolidPhone,BiLogoGmail } from "react-icons/bi";
const Footer = ({category}) => {
    return ( <>
    <div className=" w-full h-full bg-[#222222] box-border">
        <div className="container mx-auto">
            <div className="py-9">
            <h1 className="font-bold text-pink-650">Brands Directory</h1>
            <h3 className="uppercase text-gray-400 font-bold my-2">Fashion : <span className="capitalize text-gray-500 font-normal">T-shirt</span>{!!category&&category.map((c,index)=>(<span key={index} className="capitalize text-gray-500 font-normal">{" | "+c.name}</span>))} </h3>
            <h3 className="uppercase text-gray-400 font-bold my-2">footwear : <span className="capitalize text-gray-500 font-normal">T-shirt</span>{!!category&&category.map((c,index)=>(<span key={index} className="capitalize text-gray-500 font-normal">{" | "+c.name}</span>))} </h3>
            <h3 className="uppercase text-gray-400 font-bold my-2">jewellery : <span className="capitalize text-gray-500 font-normal">T-shirt</span>{!!category&&category.map((c,index)=>(<span key={index} className="capitalize text-gray-500 font-normal">{" | "+c.name}</span>))} </h3>
            <h3 className="uppercase text-gray-400 font-bold my-2">cosmetics : <span className="capitalize text-gray-500 font-normal">T-shirt</span>{!!category&&category.map((c,index)=>(<span key={index} className="capitalize text-gray-500 font-normal">{" | "+c.name}</span>))} </h3>
            </div>
        </div>
        <hr className="border-[#3c3c3c]"/>
        <div className="container mx-auto w-full showf-lg">
            <div className="grid grid-cols-5">
            <div className="py-9">
            <h1 before="" className="relative pb-2 font-bold text-white before:content-[attr(before)] before:w-10 before:absolute before:border-b-1 before:border-pink-650 before:left-0 before:bottom-0">Popular Categories</h1>
            {!!category&&category.slice(0,5).map((c,index)=>(<h2 key={index} className="capitalize text-gray-500 font-normal my-2">{c.name}</h2>))}
                        </div>

                        <div className="py-9">
            <h1 before="" className="relative pb-2 font-bold text-white before:content-[attr(before)] before:w-10 before:absolute before:border-b-1 before:border-pink-650 before:left-0 before:bottom-0">Products</h1>
            {!!category&&category.slice(0,5).map((c,index)=>(<h2 key={index} className="capitalize text-gray-500 font-normal my-2">{c.name}</h2>))}
                        </div>

                        <div className="py-9">
            <h1 before="" className="relative pb-2 font-bold text-white before:content-[attr(before)] before:w-10 before:absolute before:border-b-1 before:border-pink-650 before:left-0 before:bottom-0">Our Company</h1>
            {!!category&&category.slice(0,5).map((c,index)=>(<h2 key={index} className="capitalize text-gray-500 font-normal my-2">{c.name}</h2>))}
                        </div>

                        <div className="py-9">
            <h1 before="" className="relative pb-2 font-bold text-white before:content-[attr(before)] before:w-10 before:absolute before:border-b-1 before:border-pink-650 before:left-0 before:bottom-0">Services</h1>
            {!!category&&category.slice(0,5).map((c,index)=>(<h2 key={index} className="capitalize text-gray-500 font-normal my-2">{c.name}</h2>))}
                        </div>

                        <div className="py-9">
            <h1 before="" className="relative pb-2 font-bold text-white before:content-[attr(before)] before:w-10 before:absolute before:border-b-1 before:border-pink-650 before:left-0 before:bottom-0">Contact</h1>
            <div className="flex">
                <BiMap className="text-gray-500 w-10 h-6 flex m-2 ml-0"/>
            <h2 className="capitalize text-gray-500 font-normal my-2">2548 Broaddus Maple Court, Madisonville KY 4783, USA</h2>
            </div>
            <div className="flex">
                <BiSolidPhone className="text-gray-500 w-10 h-6 flex m-2 ml-0"/>
            <h2 className="capitalize text-gray-500 font-normal my-2">+91 999 999 9999</h2>
            </div>
            <div className="flex">
                <BiLogoGmail className="text-gray-500 w-10 h-6 flex m-2 ml-0"/>
            <h2 className="capitalize text-gray-500 font-normal my-2">support@demo.email</h2>
            </div>
            
            
                        </div>

            </div>
        </div>
        <hr className="border-[#3c3c3c]"/>
        <div className="container mx-auto">
            <div className="py-12">
            <div className=" w-full text-center text-gray-500">Copyright © 2023 Ekka all
                                    rights reserved. Powered by Ekka</div>
            </div>
        </div>
        

    </div>
    </> );
}
 
export default Footer;