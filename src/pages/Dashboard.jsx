import { Link, Route, Routes } from "react-router-dom";
import WebInfo from "./WebInfo";
import Categories from "./Categories";
import Packages from "./Packages";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-[20px] bg-gradient-to-r p-[20px]  from-blue-700 to-blue-950 flex-2/12 h-[80vh]">
        <Link to={"/dashboard/web-info"}>
          <div className="flex p-[10px] cursor-pointer font-bold text-[18px] w-full rounded-lg bg-white text-black ">
            Web Info
          </div>
        </Link>
        <Link to={"/dashboard/categories"}>
          <div className="flex p-[10px] cursor-pointer font-bold text-[18px] w-full rounded-lg bg-white text-black ">
            Categories
          </div>
        </Link>
        <Link to={"/dashboard/packages"}>
          <div className="flex p-[10px] cursor-pointer font-bold text-[18px] w-full rounded-lg bg-white text-black ">
            Packages
          </div>
        </Link>
      </div>
      <div className="flex flex-10/12 h-[80vh] overflow-y-auto">
        <Routes>
          <Route path="/*" element={<WebInfo />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
