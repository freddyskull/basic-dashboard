import React from "react";
import { NavLink } from "react-router-dom";
import Lucide from "./Lucide";


export const Items = ({ item }) => {

  return (
    <>
    <NavLink to={item.path} className="flex items-center gap-3 item">
      <Lucide name={item.icon}  size={25} />
      {item.title}
    </NavLink>
    </>
    
  );
};
