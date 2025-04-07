import React, { useEffect } from "react";
import SubscriptionSection from "../../common/SubscriptionSection";
import "./trends-news.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import BlogDetailsSection from "./BlogDetailsSection";
import Breadcrumb from "../Breadcrumb";
import RecommendedBlogs from "./RecommendedBlogs";
const TrendsNews = () => {
  const location = useLocation();
  const blogDetails = location.state;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);
  return (
    <>
      <Breadcrumb
        path={[{ label: "Home", link: "/" }, { label: "Trends and News" }]}
      />
      <BlogDetailsSection blog={blogDetails} />
      <RecommendedBlogs />
      <SubscriptionSection />
    </>
  );
};

export default TrendsNews;
