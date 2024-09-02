import React from "react";
import { navbarMenu } from "./menu";
import { Items } from "./Items";
import logo from "@public/logo.png";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className="xl:w-[20%] lg:w-[25%] md:w-[30%] bg-card px-4 py-8 ">
      <div className="flex justify-center mb-8">
        <Link to={"/dashboard"}>
          <img src={logo} className="scale-90 hover:scale-105 transition-all" style={{ width: "10rem" }} />
        </Link>
      </div>
      <div>
        <ul>
          {navbarMenu.map((item) => (
            <li key={Math.random()} className="uppercase text-white">
              <Items item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
