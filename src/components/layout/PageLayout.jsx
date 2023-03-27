import React from "react";
import {Outlet} from "react-router-dom";
import Rewards from "../feature/Rewards";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = () => {
  return (
    <div>
      <Header />
      <div className="md:px-[34px] px-1">
        <Outlet />
      </div>
      <Footer />
      <Rewards />
    </div>
  );
};

export default PageLayout;
