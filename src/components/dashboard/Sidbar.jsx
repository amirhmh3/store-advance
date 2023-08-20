import { Link } from "react-router-dom";
const Sidbar = () => {
  return (
    <>
      <div dir="rtl" className="w-72 h-screen fixed bg-gray-700 p-5 right-0">
        <Link to="/dashboard">
          <div className="text-white font-bold w-full h-max p-3 bg-gray-600 text-center">
            داشبورد
          </div>
        </Link>
        <Link to="/dashboard/users">
        <div className="text-white font-bold w-full h-max p-3 bg-gray-600 hover:bg-slate-500 duration-300">
          لیست کاربران
        </div>
        </Link>
      </div>
    </>
  );
};

export default Sidbar;
