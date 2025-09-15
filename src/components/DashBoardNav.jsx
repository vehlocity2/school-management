import React, { useContext, useState } from "react";
import { Home, Settings, LogOut, Menu, X, CalendarPlus, BookCheck, BookOpenCheck, UserRound, GraduationCap, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ApiContext/AuthContext";

const DashBoardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  
  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-full h-screen bg-white shadow p-4 rounded">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col justify-between h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-4">
                {user?.role === "admin" && (
                        <>
                            <NavLink to="/dashboard/admin" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                                <Home className="mr-2" />
                                Admin Home
                            </NavLink>
                            <NavLink to="/dashboard/manage/students" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                                <GraduationCap className="mr-2" />
                                Manage Students
                            </NavLink>
                            <NavLink to="/dashboard/manage/teachers" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                                <BookOpenCheck className="mr-2" />
                                Manage Teachers
                            </NavLink>
                            <NavLink to="/dashboard/manage/parents" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                                <UserRound className="mr-2" />
                                Manage Parents
                            </NavLink>
                            <NavLink to="/dashboard/create-event" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                                <CalendarPlus className="mr-2" />
                                Create Event
                            </NavLink>
                        </>
                    )}
                    {user?.role === "student" && (
                    <>
                        <NavLink to="/dashboard/students" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <Home className="mr-2" />
                            Student Home
                        </NavLink>
                        <NavLink to="/dashboard/classes" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <BookOpenCheck className="mr-2" />
                            View Classes
                        </NavLink>
                        <NavLink to="/dashboard/attendance" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <CalendarPlus className="mr-2" />
                            View Attendance
                        </NavLink>
                        <NavLink to="/dashboard/results" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <BookCheck className="mr-2" />
                            View Grades
                        </NavLink>
                    </>
                    )}
                    {user?.role === "teacher" && (
                    <>
                        <NavLink to="/dashboard/teachers" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <Home className="mr-2" />
                            Teacher Home
                        </NavLink>
                        <NavLink to="/dashboard/teacher/classes" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <BookOpenCheck className="mr-2" />
                            View Classes
                        </NavLink>
                        <NavLink to="/dashboard/teacher/attendance" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <CalendarPlus className="mr-2" />
                            View Attendance
                        </NavLink>
                        <NavLink to="/dashboard/teacher/results" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <BookCheck className="mr-2" />
                            View Results
                        </NavLink>
                    </>
                    )}
                    {user?.role === "parent" && (
                    <>
                        <NavLink to="/dashboard/parents" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <Home className="mr-2" />
                            Parent Home
                        </NavLink>
                        <NavLink to="/dashboard/child/attendance" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <CalendarPlus className="mr-2" />
                            View Attendance
                        </NavLink>
                        <NavLink to="/dashboard/child/results" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                            <BookCheck className="mr-2" />
                            View Results
                        </NavLink>
                    </>
                    )}
            </div>
            <div className="border-t border-gray-200 mt-4 py-4">
                <NavLink to="/dashboard/:id/profile" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                    <Settings className="mr-2" />
                    My Profile
                </NavLink>
                <NavLink to="/login" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                    <LogOut className="mr-2" />
                    Log Out
                </NavLink>
            </div>
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
              <nav className="flex flex-col justify-between h-[calc(100vh-4rem)] overflow-y-auto">
                <div className="space-y-4">
                    {user?.role === "admin" && (
                        <>
                            <Link to="/dashboard/admin" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`} onClick={() => setIsOpen(false) }>
                                <Home className="mr-2" />
                                Admin Home
                            </Link>
                            <Link to="/dashboard/manage/students" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <GraduationCap className="mr-2" />
                                Manage Students
                            </Link>
                            <Link to="/dashboard/manage/teachers" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <BookOpenCheck className="mr-2" />
                                Manage Teachers
                            </Link>
                            <Link to="/dashboard/manage/parents" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <UserRound className="mr-2" />
                                Manage Parents
                            </Link>
                            <Link to="/dashboard/create-event" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <CalendarPlus className="mr-2" />
                                Create Event
                            </Link>
                        </>
                    )}
                        {user?.role === "student" && (
                        <>
                            <Link to="/dashboard/students" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <Home className="mr-2" />
                                Student Home
                            </Link>
                            <Link to="/dashboard/classes" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <BookCheck className="mr-2" />
                                View Classes
                            </Link>
                            <Link to="/dashboard/attendance" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <CalendarPlus className="mr-2" />
                                View Attendance
                            </Link>
                            <Link to="/dashboard/results" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <BookCheck className="mr-2" />
                                View Grades
                            </Link>
                        </>
                        )}
                        {user?.role === "teacher" && (
                        <>
                            <Link to="/dashboard/teachers" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <Home className="mr-2" />
                                Teacher Home
                            </Link>
                            <Link to="/dashboard/teacher/classes" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <BookOpenCheck className="mr-2" />
                                View Classes
                            </Link>
                            <Link to="/dashboard/teacher/attendance" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <CalendarPlus className="mr-2" />
                                View Attendance
                            </Link>
                            <Link to="/dashboard/teacher/results" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <BookCheck className="mr-2" />
                                View Results
                            </Link>
                        </>
                        )}
                        {user?.role === "parent" && (
                        <>
                            <Link to="/dashboard/parents" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <Home className="mr-2" />
                                Parent Home
                            </Link>
                            <Link to="/dashboard/child/attendance" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <CalendarPlus className="mr-2" />
                                View Attendance
                            </Link>
                            <Link to="/dashboard/child/results" className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => setIsOpen(false)}>
                                <BookCheck className="mr-2" />
                                View Results
                            </Link>
                        </>
                        )}
                </div>
                <div className="border-t border-gray-200 mt-4 space-y-3 py-4">
                    <NavLink to="/dashboard/:id/profile" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                        <Settings className="mr-2" />
                        Settings
                    </NavLink>
                    <NavLink to="/login" className={({ isActive})=>`flex items-center p-2 hover:bg-gray-200 rounded ${isActive ? 'bg-gray-200 font-semibold' : ''}`}>
                        <LogOut className="mr-2" />
                        Log Out
                    </NavLink>
                </div>
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
