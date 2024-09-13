import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Links from "../Components/Links/Links";

const MainLayout: FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
      <div className="links">
        <Links />
      </div>
    </>
  );
};

export default MainLayout;
