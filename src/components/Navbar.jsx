
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = (
    <>
      <li>
        <a href="#about" className="font-semibold">About me</a>
        
      </li>
      <li>
        <a href="#skills" className="font-semibold" to={'/'}>Skills</a>
      </li>
      <li>
        <a href="#project" className="font-semibold" to={'/'}>Projects</a>
      </li>
      <li>
        <a href="#contact" className="font-semibold" to={'/'}>Contact me</a>
      </li>
     
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-bold">
          {" "}
          {"<M | A/>"}{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get Resume</a>
      </div>
    </div>
  );
}
