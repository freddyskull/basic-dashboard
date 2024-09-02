import React from "react";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Header } from "./components/Header";

export const AppLayout = ({children, title = ""}) => {
  
  return (
    <div className="content flex">
      <Sidebar className="" />
      <div className="w-full h-[100vh]  px-8 py-4">
        <Header title={title} />
      </div>
    </div>
  );
};
