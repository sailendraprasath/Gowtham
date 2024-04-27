import React from "react";
import { IoMdContact } from "react-icons/io";
import { MdPassword } from "react-icons/md";
import LoginImg from "../assets/LoginImg.png";
const Login = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% grid grid-cols-2 h-screen">
        <div className="xl:py-[140px] xl:ml-[200px] ">
          <h1 className="font-font1 text-white font-semibold text-5xl">
            Learn Locate Connect
          </h1>
          <h1 className="text-white font-font1 font-semibold xl:text-2xl xl:py-6">
            Login to your account
          </h1>
          <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% flex items-center w-[280px] mt-5 py-2 px-2 rounded-xl ">
            <IoMdContact className="xl:size-6 text-white " />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent font-font1 px-1 outline-none w-[260px] "
            />
          </div>
          <div className="bg-gradient-to-tl from-my2 from-40%  to-my1 to-100% flex items-center w-[280px] py-2 px-2 mt-5 rounded-xl ">
            <MdPassword className="xl:size-6 text-white " />
            <input
              type="text"
              placeholder="Password"
              className="bg-transparent font-font1 outline-none px-1 w-[260px] "
            />
          </div>
          <button className="text-xs mt-5 text-white">forgot Password?</button>
          <div className="bg-my3  flex items-center w-[250px] py-3 px-2 mt-5  rounded-xl ">
            <h1 className="font-font1 ml-[90px] text-white ">LOGIN</h1>
          </div>
          <button className="text-xs mt-5 ml-[60px] text-white">
            Don’t have an account?
          </button>
          <br />
          <button className="text-xs -mt-1 ml-[60px] text-white">
            Sign up here for Teacher or
          </button>
          <br />
          <button className="text-xs -mt-1 ml-[60px] text-white">
            Sign up here for Student
          </button>
        </div>
        <div className="mt-[200px]">
          <img src={LoginImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
