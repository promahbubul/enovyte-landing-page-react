import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

const MainLayout = () => {
  return (
    <div className="border-red-500 border-2 w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
