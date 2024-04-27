import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Home1 from "../assets/Homeimg/HomeImg1.png";

const Navbar = () => {
  const Links = [
    { name: "HELP", icon: <IoIosHelpCircleOutline size={26} /> },
    { name: "Sign in", icon: <IoPerson size={26} /> },
    { name: "Locate", icon: <FaMapLocationDot size={26} /> },
  ];

  return (
    <>
      <div className="bg-my4 flex justify-between items-center table-fixed px-10 py-6">
        <div>
          <img src={Home1} alt="" className="w-[50px] " />
        </div>
        <div className="mt-4">
          <div className="bg-white w-[130px] outline-none rounded-lg font-font3 py-2 ml-[-170px]">
            <select
              name=""
              id=""
              className="bg-transparent outline-none ml-[10px] w-[100px]"
            >
              <option value="" className=" ">
                Resources
              </option>
            </select>
          </div>
        </div>
        <div>
          <div className="bg-mybg flex items-center w-[180px] py-1 px-2 mt-5 rounded-xl ">
            <FaSearch className="xl:size-6 text-black " />
            <input
              type="text"
              placeholder="SEARCH"
              className="bg-transparent font-font2 text-center outline-none px-1 w-[150px] "
            />
          </div>
        </div>
        <div className="flex items-center ">
          <ul className=" gap-14 mt-[30px] ml-6 px-20 grid grid-cols-3 font-font3 text-white">
            {Links.map((link) => (
              <li key={link.name}>
                <span className="grid grid-cols-2 ">
                  {link.icon}
                  {link.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
