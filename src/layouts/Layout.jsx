import React from "react";
import LayoutIndex from "./index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <LayoutIndex>
      {/* The Outlet will render the matched child route here */}
      <Outlet />
    </LayoutIndex>
  );
};

export default Layout;
