import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { logo } from "../assets";

import { BsCart2 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import Btn from "./Btn";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const navlink = [
    {
      id: 0,
      title: "Home",
      path: "/",
    },
    {
      id: 1,
      title: "About",
      path: "about",
    },
    {
      id: 2,
      title: "Product",
      path: "product",
    },
    {
      id: 3,
      title: "Contact",
      path: "contact",
    },
  ];
  return (
    <>
      <section className="bg-gray-100  z-50 top-0 right-0 w-full ">
        <div className="relative py-3">
          <div className=" flex items-center justify-start">
            <div className="   flex-1 flex justify-center items-center h-24  md:h-16 md:flex-initial">
              <Link to="/" className="">
                <img src={logo} alt="" className="border shadow-md md:border-none md:shadow-none w-24  md:w-40 " />
              </Link>
            </div>
            <div className="flex-1 md:flex md:flex-row md:px-2">
              <nav
                className={` w-full py-3 transition-all ease-in duration-400 lg:flex-[0.5] xl:flex-[0.6] 2xl:flex-[0.7] ${
                  toggle ? "absolute left-0 top-0 h-screen w-full  bg-gray-200 md:static md:bg-gray-100" : "hidden md:flex md:flex-1 md:items-center md:justify-center lg:justify-end"
                }`}
              >
                <ul
                  className="flex flex-col gap-5 justify-center items-center text-2xl fo
                nt-bold md:flex-row z-50"
                >
                  <div className="w-full flex justify-end items-center px-5  md:hidden ">
                    <RxCross2 onClick={() => setToggle(false)} />
                  </div>
                  {navlink.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.path}
                        onClick={() => setToggle(false)}
                        className={({ isActive }) =>
                          isActive
                            ? "underline text-2xl md:text-xl md:no-underline ease-in-out transition-all duration-150 text-blue-800 uppercase font-bold"
                            : "text-gray-500 uppercase text-lg font-bold"
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex flex-col sm:flex-row md:flex-initial lg:flex-row lg:flex-[0.5] xl:flex-[0.4] 2xl:flex-[0.2]">
                <div className="hidden lg:flex justify-center items-center py-2 absolute    md:text-3xl md:top-16 pl-5 lg:static lg:text-sm lg:flex-1">
                  <h1 className="font-bold text-gray-500">
                    Welcome, Raju chhetry
                  </h1>
                </div>
                <div className="hidden  w-full  md:flex justify-center items-center py-2 lg:flex-1">
                  <Btn title="Log In" path="/"/>
                </div>
                <div className="w-full flex justify-center items-center py-2 text-3xl md:hidden">
                  <GiHamburgerMenu onClick={() => setToggle(!toggle)} />
                </div>
                <div className="hidden  md:flex absolute justify-center items-center   md:static lg:flex-initial">
                  <Link to="cart" className="relative p-2">
                    <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center bg-[#3A5EFC] rounded-full md:w-6 md:h-6 md:text-xl lg:w-5 lg:h-5 lg:text-sm">
                      0
                    </span>
                    <BsCart2 className="text-3xl md:text-4xl lg:text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Navbar;
