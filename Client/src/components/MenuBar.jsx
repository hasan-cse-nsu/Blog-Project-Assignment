/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <section className="bg-white shadow-xl h-[80px] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-2">
            <div className="logo flex justify-end">
              <img
                className="w-[60px] h-[60px]"
                src="images/blog_3959542.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-7">
            <nav className="flex justify-center">
              <ul className="flex py-[10px] gap-[15px]">
                <li className="px-[16px] py-[8px] bg-gray-700 rounded-md">
                  <NavLink to="/" className="text-white">
                    Home
                  </NavLink>
                </li>
                <li className="px-[16px] py-[8px] bg-gray-200 rounded-md">
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li className="px-[16px] py-[8px] bg-gray-200 rounded-md">
                  <NavLink to="/service">Service</NavLink>
                </li>
                <li className="px-[16px] py-[8px] bg-gray-200 rounded-md">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="px-[16px] py-[8px] bg-gray-200 rounded-md">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-span-3">
            <div className="py-[12px]">
              <Link
                to="/login"
                className="px-[16px] py-[8px] bg-purple-700 text-white rounded-md"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
