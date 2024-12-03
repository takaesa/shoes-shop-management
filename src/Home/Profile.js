import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { useState } from "react";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("account");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
  return (
    <div>
      <Header />
      <div className="tab-container">
      {/* Tabs */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === "account" ? "active" : ""}`}
          onClick={() => handleTabClick("account")}
        >
          Account
        </div>
        <div
          className={`tab ${activeTab === "personal-data" ? "active" : ""}`}
          onClick={() => handleTabClick("personal-data")}
        >
          Personal Data
        </div>
        <div
          className={`tab ${activeTab === "address" ? "active" : ""}`}
          onClick={() => handleTabClick("address")}
        >
          Address
        </div>
        <div
          className={`tab ${activeTab === "payment-settings" ? "active" : ""}`}
          onClick={() => handleTabClick("payment-settings")}
        >
          Payment Settings
        </div>
        <div
          className={`tab ${activeTab === "orders" ? "active" : ""}`}
          onClick={() => handleTabClick("orders")}
        >
          Orders
        </div>
        <div
          className={`tab ${activeTab === "favorites" ? "active" : ""}`}
          onClick={() => handleTabClick("favorites")}
        >
          Favorites
        </div>
      </div>

      {/* Tab Contents */}
      <div className="tab-contents">
        {activeTab === "account" && (
          <div className="tab-content">
            <h2>Your Point Status</h2>
            <p>You've earned 50 out of 200 points towards your next reward.</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "25%" }}></div>
            </div>
            <p><strong>50</strong> / 200</p>
            <p>*Points will be updated within 24 hours from in-store purchases or online order shipments.</p>
          </div>
        )}
        {activeTab === "personal-data" && (
          <div className="tab-content">
            <h2>Personal Data</h2>
            <p>Here you can update your personal information such as your name, email, and phone number.</p>
          </div>
        )}
        {activeTab === "address" && (
          <div className="tab-content">
            <h2>Address</h2>
            <p>Manage your shipping and billing addresses here.</p>
          </div>
        )}
        {activeTab === "payment-settings" && (
          <div className="tab-content">
            <h2>Payment Settings</h2>
            <p>Manage your payment methods securely.</p>
          </div>
        )}
        {activeTab === "orders" && (
          <div className="tab-content">
            <h2>Your Most Recent Order</h2>
            <p>You currently don't have any recent orders.</p>
          </div>
        )}
        {activeTab === "favorites" && (
          <div className="tab-content">
            <h2>Your Available Rewards</h2>
            <p>You currently don't have any rewards.</p>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Profile;
