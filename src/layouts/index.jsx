import React, { memo } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useLocation } from "react-router-dom";

const LayoutIndex = ({ children }) => {
  const location = useLocation();

  const isHomePage = [
    "/",
    "/shop-by-product",
    "/shop-by-brand",
    "/interior-designer/register",
  ].includes(location.pathname);
  const hideFooter = ["/shop-by-product", "/shop-by-brand"].includes(
    location.pathname
  );
  return (
    <>
      <Header />
      {!isHomePage && (
        <div
          className={
            "toolbar relative top-0 w-full h-[98px] bg-transparent z-50 shadow-md"
          }
        />
      )}

      {children}
      {!hideFooter && <Footer />}
    </>
  );
};
export default memo(LayoutIndex);
