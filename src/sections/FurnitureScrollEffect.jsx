import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FurnitureScrollEffect = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Faster animation (adjust as needed)
      easing: "ease-in-out", // Smooth transition
      once: true, // Run animation only once
    });
  }, []);

  return (
    <div className="container11 text-center mt-5">
      <img
        src="https://grassitupshop.com/cdn/shop/files/FUR5000255-0001_Diphano_Newport_Dining_20armchair_AF10_203R03_20HFTK_20C603_02_58c9da10-c5a0-429d-a48f-8599dbeea37d_352x352.jpg?v=1736256391"
        className="img-fluid"
        data-aos="flip-left"
        data-aos-duration="500" // Faster animation
        data-aos-easing="ease-in-out"
        alt="Furniture"
      />
    </div>
  );
};

export default FurnitureScrollEffect;
