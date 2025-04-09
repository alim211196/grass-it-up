import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./profile.css";
import SubscriptionSection from "../../common/SubscriptionSection";
import Breadcrumb from "../Breadcrumb";
import ProfileInfo from "./ProfileInfo";
import AccountForm from "./AccountForm";
import OrderList from "./OrderList";
import OrderHistory from "./OrderHistory";
import WishListContainer from "./WishListContainer";
import { useNavigate } from "react-router-dom";
import HeaderBanner from "./HeaderBanner";
const tabs = [
  "My Profile",
  "My Account",
  "Edit Account",
  "Order History",
  "Wishlist",
  "Logout",
];

const CustomerProfile = () => {
  const [activeTab, setActiveTab] = useState("My Profile");
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [activeTab]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "My Profile":
        return <ProfileInfo />;
      case "My Account":
        return (
          <>
            <ProfileInfo />
            <AccountForm />
            <OrderList />
          </>
        );
      case "Edit Account":
        return <AccountForm />;
      case "Order History":
        return <OrderHistory />;
      case "Wishlist":
        return <WishListContainer />;
      case "Logout":
        return navigate("/");
      default:
        return null;
    }
  };

  return (
    <>
      {/* <Breadcrumb path={[{ label: "Home", link: "/" }, { label: activeTab }]} /> */}
      <HeaderBanner activeTab={activeTab} />
      <div className="profile-page">
        <div className="sidebar">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`sidebar-item ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="right-side-content">{renderContent()}</div>
      </div>
      <SubscriptionSection />
    </>
  );
};

export default CustomerProfile;
