import React, { useState } from "react";
import { Home, Settings, LogOut, Menu, X } from "lucide-react";

const DashBoardNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", icon: <Home />, link: "/" },
    { label: "Settings", icon: <Settings />, link: "/settings" },
    { label: "Logout", icon: <LogOut />, link: "/logout", danger: true },
  ];

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-full min-h-screen bg-white shadow p-4 rounded">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className={`flex items-center space-x-2 transition-colors duration-200 
                ${item.danger ? "hover:text-red-600" : "hover:text-blue-600"}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navbar with Toggle */}
      <div className="md:hidden">
        {/* Toggle Button */}
        <div className="p-4">
          <Menu
            className="cursor-pointer w-7 h-7"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Sidebar */}
            <div className="bg-white w-64 min-h-screen p-4 shadow-lg transform transition-transform duration-300">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Dashboard</h2>
                <X
                  className="cursor-pointer w-6 h-6"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    className={`flex items-center space-x-2 transition-colors duration-200 
                      ${item.danger ? "hover:text-red-600" : "hover:text-blue-600"}`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Overlay to close sidebar */}
            <div
              className="flex-1 bg-black bg-opacity-40"
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardNav;
