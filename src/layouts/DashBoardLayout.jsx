import React from "react";
import { Outlet } from "react-router-dom";
import DashBoardNav from "../components/DashBoardNav";

const DashBoardLayout = () => {
  return (
    <div className="flex md:min-h-screen">
      {/* Sidebar */}
      <div className="block md:block w-1/6">
        <DashBoardNav />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
