/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import logo from "./assets/logo.png";
import { HiOutlineMenu } from 'react-icons/hi';

function Navbar() {

  const [navOpen,setNav] = useState(false);

  const NavOptions = [
    {name:"Home",link:'/'},
    {name:"Projects",link:'/'},
    {name:"Clients",link:'/'},
    {name:"Order Here",link:'/'},
    {name:"About",link:'/'},
    {name:"Contact Us",link:'/'},
    {name:"Login",link:'/'},
    {name:"Sign Up",link:'/'},
  ]

  const toggleNav = () =>{
    setNav(!navOpen);
  }

  return (
    <div className="flex w-full bg-gray-900 justify-between flex-wrap p-3 sticky top-0 z-50">
      <div className="text-white flex items-center space-x-2">
        <img
          className="w-10 h-10 rounded-full"
          alt="Profile Picture"
          src={logo}
        />
        <span className="text-white">Devsol</span>
      </div>

      <div className="lg:hidden items-center py-3 ">
        <HiOutlineMenu className="text-white cursor-pointer "
        onClick={toggleNav}/>
      </div>

      <div className={`${navOpen ? "flex-col my-3 space-y-3 basis-full inline-grid items-center transition ease-linear duration-800" : "hidden"} lg:flex items-center lg:space-x-2 text-white px-3`}>
      {NavOptions.map((option, index) => (
          <a key={index} href={option.link} className={`hover:text-gray-300`}>
            {option.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
