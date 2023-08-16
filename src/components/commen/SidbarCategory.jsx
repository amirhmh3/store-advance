import { BiPlusMedical } from "react-icons/bi";
import spinner from "assets/gif/spinner.gif";
const SidbarCategory = ({ category ,loding}) => {
  return (
    <>
    <div className="w-full h-full">
      <h1 className="uppercase font-bold text-gray-700">Category</h1>
      <div className="my-3 mx-2">
        {!!loding?<img src={spinner}></img>:!!category &&
          category.map((c, index) => (
            <div key={index} className="flex items-center">
              <h1 className="capitalize w-full text-gray-700 my-1">{c.name}</h1>
              <BiPlusMedical className="text-xs  text-gray-500" />
            </div>
          ))}
      </div>
      <div className="border-t-1 mx-2">
      <h1 className="uppercase font-bold text-gray-700 mt-3">Price</h1>
      </div>
      </div>
    </>
  );
};

export default SidbarCategory;
