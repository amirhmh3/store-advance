import Sidbar from "../components/dashboard/Sidbar";
const DashboardLayout = ({ children }) => {
  return (
    <>
      <Sidbar />
      <div dir="rtl" className="mr-80 ml-10 pt-5">{children}</div>
    </>
  );
};

export default DashboardLayout;
