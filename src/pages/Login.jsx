import React, { useContext, useState } from 'react'
import { FaHouseDamage } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../ApiContext/AuthContext';


const Login = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { Login } = useContext(AuthContext)

  const RoleIcon = ({ role }) => {
    switch (role) {
      case "student":
        return <div className="flex justify-center mb-4 bg-blue-100 p-2 w-14 items-center h-14 rounded-full">
            <PiStudentBold className="w-8 h-8 text-blue-500" />
        </div>;
      case "parent":
        return <div className="flex justify-center mb-4 bg-green-100 p-2 w-14 items-center h-14 rounded-full">
            <IoIosContact className="w-8 h-8 text-green-500" />
        </div>;
      case "teacher":
        return <div className="flex justify-center mb-4 bg-purple-100 p-2 w-14 items-center h-14 rounded-full">
            <IoBookOutline className="w-8 h-8 text-purple-500" />
        </div>;
      case "admin":
        return <div className="flex justify-center mb-4 bg-red-100 p-2 w-14 items-center h-14 rounded-full">
            <IoIosSettings className="w-8 h-8 text-red-500" />
        </div>;
      default:
        return null;
    }
  };

  const RoleText = ({role})=>{
    switch (role) {
        case "student":
            return <p>Access Your Learning Portal</p>;
        case "parent":
            return <p>Monitor Your Child's Progress</p>;
        case "teacher":
            return <p>Manage Classes and Students</p>;
        case "admin":
            return <p>School Administration Panel</p>;
        default:
            return null;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
        const user = await Login(email, password, role)
        
        if(role === "admin"){
            navigate('/dashboard/admin');
        }else if(role === "student"){
            navigate('/dashboard/students');
        } else if(role === "teacher"){
            navigate('/dashboard/teachers');
        } else if(role === "parent"){
            navigate('/dashboard/parents');
        }
    } catch (error) {
        
    }
    
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen overflow-y-auto md:my-7 px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-10 text-center'>
        <FaHouseDamage className="w-14 h-14 text-blue-500" />
        <div>
          <h1 className='text-2xl sm:text-3xl font-bold'>School Management</h1>
          <p className='text-base sm:text-lg text-gray-600'>School Portal Login</p>
        </div>
      </div>

      {/* Role Selection */}
      <div className='mb-8 p-4 sm:p-6  w-full max-w-2xl'>
        <h2 className='text-lg sm:text-xl font-normal text-gray-500 text-center mb-6'>
          Select your role to continue
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Student */}
          <div className={`bg-white  h-28 w-full rounded-2xl flex flex-col justify-center px-4 sm:px-6 gap-1 cursor-pointer transition ${role === "student"? 'border-[3px] border-blue-500':'border-2 border-gray-300'}`}
            onClick={() => setRole("student")}>
            <div className="flex items-center gap-2">
              <PiStudentBold className={`w-8 h-8 ${role === "student" ? 'text-blue-500' : 'text-gray-400'}`} />
              <p className='text-base sm:text-lg font-semibold'>Student</p>
            </div>
            <p className='text-gray-500 text-sm sm:text-base'>Access Your Learning Portal</p>
          </div>

          {/* Parent */}
          <div className={`bg-white  h-28 w-full rounded-2xl flex flex-col justify-center px-4 sm:px-6 gap-1 cursor-pointer  transition ${role === "parent" ? "border-[3px] border-green-500" : "border-2 border-gray-300"}`}
            onClick={() => setRole("parent")}>
            <div className='flex items-center gap-2'>
              <IoIosContact className={`w-7 h-7 ${role === "parent" ? "text-green-500" : "text-gray-400"}`} />
              <p className='text-base sm:text-lg font-semibold'>Parent</p>
            </div>
            <p className='text-gray-500 text-sm sm:text-base'>Monitor Your Child's Progress</p>
          </div>

          {/* Teacher */}
          <div className={`bg-white  h-28 w-full rounded-2xl flex flex-col justify-center px-4 sm:px-6 gap-1 cursor-pointer  transition ${ role === "teacher" ? "border-[3px] border-purple-500" : "border-2 border-gray-300"}`}
            onClick={() => setRole("teacher")}>
            <div className="flex items-center gap-2">
              <IoBookOutline className={`w-7 h-7  ${role === "teacher" ? "text-purple-500" : "text-gray-400"}`} />
              <p className='text-base sm:text-lg font-semibold'>Teacher</p>
            </div>
            <p className='text-gray-500 text-sm sm:text-base'>Manage Classes and Students</p>
          </div>

          {/* Admin */}
          <div className={`bg-white  h-28 w-full rounded-2xl flex flex-col justify-center px-4 sm:px-6 gap-1 cursor-pointer  transition ${ role === "admin" ? " border-[3px] border-red-400" : "border-2 border-gray-300"}`}
            onClick={() => setRole("admin")}>
            <div className='flex items-center gap-2'>
              <IoIosSettings className={`w-7 h-7 ${role === "admin" ? "text-red-500" : "text-gray-400"}`} />
              <p className='text-base sm:text-lg font-semibold'>Admin</p>
            </div>
            <p className='text-gray-500 text-sm sm:text-base'>School Administration Panel</p>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="bg-white p-6 sm:p-8 border border-gray-300 rounded-lg shadow-md w-full max-w-[39rem]">
        <div className="flex justify-center ">{role && <RoleIcon role={role} />}</div>
        <h2 className='text-2xl sm:text-4xl font-semibold text-gray-700 text-center mb-2'>
          {role} Login
        </h2>
        <p className='text-gray-500 text-base sm:text-xl text-center mb-6'>{role &&<RoleText role={role}/>}</p>
        <form className='w-full pt-4 space-y-4' onSubmit={handleSubmit}>
            <div className=' mb-6'>
                <h2 className='text-lg font-semibold text-gray-700 mb-3'>Email</h2>
              <div className="relative">
                  <MdOutlineMailOutline className='absolute -translate-y-1/2 top-1/2 left-4 w-7 h-7 text-gray-400' />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={`Enter your ${role} email`}
                    className='w-full pl-12 pr-4 py-5 text-xl border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                  />
              </div>
            </div>
            <div className='mb-6'>
                <h2 className='text-lg font-semibold text-gray-700 mb-3'>Password</h2>
              <div className="relative">
                  <FaLock className='absolute -translate-y-1/2 left-4 top-1/2 w-6 h-6 text-gray-400' />
                  <input
                    type={showPassword ? " text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className='w-full pl-12 pr-4 py-5 text-xl border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                  />
                  {showPassword ? <FaRegEye className='absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer' onClick={()=>setShowPassword(false)}/> 
                  : <FaRegEyeSlash className='absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer' onClick={()=>setShowPassword(true)}/>}
              </div>
            </div>
           <div className="flex flex-col  gap-4">
               {role !== "admin" && <button
                  type="submit"
                  className='w-full py-5 bg-blue-500 mt-10 text-white text-base md:text-xl font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300' 
                >
                  Sign in as {role}
                </button>}
                {role !== "admin" && <p className='text-center text-blue-500 hover:text-blue-600 text-base mt-5 cursor-pointer'>Forgot Your Password?</p>}
           </div>            
          </form>

          <div className="mt-10 border-t pt-4">
            <h3 className='text-lg font-semibold text-gray-700 mb-3'>Demo credentials</h3>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-3">
                <div className="">
                    <p className='text-gray-800'>Student: student@school.com</p>
                </div>
                 <div className="">
                    <p className='text-gray-800'>Parent: parent@school.com</p>
                </div>
                 <div className="">
                    <p className='text-gray-800'>Teacher: teacher@school.com</p>
                </div>
                 <div className="">
                    <p className='text-gray-800'>Admin: admin@school.com</p>
                </div>
            </div>
            <p className='text-gray-500'>All Password: [role]123. (eg. student123)</p>
          </div>
      </div>

      <div className='flex items-center gap-2 text-blue-500 hover:text-blue-600 text-base mt-10 cursor-pointer' onClick={()=>navigate('/')}>
        <FaArrowLeftLong className='inline-block mr-2 w-5 h-5 ' />
        <p className='text-xl'>Back to school website</p>
      </div>
    </div>
  );
}

export default Login;
