import { BiX, BiPlusMedical, BiSolidStar } from "react-icons/bi";
import { CategotyContext } from "./../../../context/CategotyContext";
import { useContext } from "react";
import groupData from "../../../utility/groupData";
import SliderProductVerticalCategory from "../SliderProductVerticalCategory";
const SidbarCategory = ({handelOpenCategory}) => {
  const { category,products } = useContext(CategotyContext);
  const groupProduct=groupData(products,4)
  return (
    <>
      <div className=" mx-auto h-full w-full bg-white overflow-y-scroll">
        <div className="p-5">
        <div className="flex">
          <h1 className="uppercase font-bold text-gray-700 w-full">category</h1>
          <BiX onClick={handelOpenCategory} className="text-3xl text-gray-700" />
        </div>
        <div className="my-3 mx-2">
          {!!category &&
            category.map((c, index) => (
              <div key={index} className="flex items-center">
                <h1 className="capitalize w-full text-gray-700 my-1">
                  {c.name}
                </h1>
                <BiPlusMedical className="text-xs  text-gray-600" />
              </div>
            ))}
        </div>
        <div>

        </div>
        <div className="">
          <h1 className="uppercase font-bold text-gray-700 w-full">
            best sellers
          </h1>
          <SliderProductVerticalCategory groupProduct={groupProduct}/>
        </div>
        </div>
      </div>
    </>
  );
};

export default SidbarCategory;
