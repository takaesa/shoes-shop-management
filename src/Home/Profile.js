import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { useState, useEffect, useRef } from "react";
import Input from "../component/Input.js";
import "../css/profile.css";
import right from "../svg/right.svg";
import bluestar from "../svg/bluestar.svg";
import choosepicture from "../svg/choosepicture.svg";
import Checkbox from "../Login/Checkbox.js";

const Profile = (...props) => {
  const defaultAddressLabel = "Set as default address";
  const [defaultAddressRemember, setdefaultAddressRemember] = useState(false);


  const [isOverlayAddAddressVisible, setOverlayAddAddressVisible] = useState(false);
  const handleAddAddressClick = () => {
    setOverlayAddAddressVisible(true);
  };

  const handleOverlayBackgroundClick = (e) => {
    if (e.target.className === "overlayAddAddress") {
      setOverlayAddAddressVisible(false);
    }
  };

  const handleCancelClick = () => {
    setOverlayAddAddressVisible(false);
  }

  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const progressFill = document.querySelector(".progressFill");

      const progressPoints = 100; // Current points
      const maxPoints = 200; // Maximum points
      const progressPercentage = (progressPoints / maxPoints) * 100;

      progressFill.style.width = `${progressPercentage}%`;
    }


  }, []);
  const [activeTab, setActiveTab] = useState("personal-data");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Header />
      <div className="profileContainer">
        <div className="left-col">
          <p
            style={{
              fontSize: 24,
              fontWeight: 700,
              textTransform: "uppercase",
              paddingLeft: 40,
              color: "#000",
              textOverflow: "ellipsis",
              width: "90%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              margin: 0,
            }}
          >
            HELLO {props.UserName}UIT STUDENT
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 500,
              paddingLeft: 40,
              color: "#797472",
              paddingTop: 10,
              margin: 0,
            }}
          >
            Member since December 2024
          </p>
          <div className="tab-container">
            {/* Tabs */}
            <div className="tabs">
              <div
                className={`tab ${activeTab === "account" ? "active" : ""}`}
                onClick={() => handleTabClick("account")}
              >
                Account
                <img className="iconRight" src={right} alt="arrowright" />
              </div>
              <div
                className={`tab ${activeTab === "personal-data" ? "active" : ""
                  }`}
                onClick={() => handleTabClick("personal-data")}
              >
                Personal Data
                <img className="iconRight" src={right} alt="arrowright" />
              </div>
              <div
                className={`tab ${activeTab === "address" ? "active" : ""}`}
                onClick={() => handleTabClick("address")}
              >
                Address
                <img className="iconRight" src={right} alt="arrowright" />
              </div>
              <div
                className={`tab ${activeTab === "payment-settings" ? "active" : ""
                  }`}
                onClick={() => handleTabClick("payment-settings")}
              >
                Payment Settings
                <img className="iconRight" src={right} alt="arrowright" />
              </div>
              <div
                className={`tab ${activeTab === "orders" ? "active" : ""}`}
                onClick={() => handleTabClick("orders")}
              >
                Orders
                <img className="iconRight" src={right} alt="arrowright" />
              </div>
              <div
                className={`tab ${activeTab === "favorites" ? "active" : ""}`}
                onClick={() => handleTabClick("favorites")}
              >
                Favorites
                <img className="iconRight" src={right} alt="arrowright" />
              </div>
            </div>
          </div>
        </div>

        <div className="right-col">
          {/* Tab Contents */}
          <div className="tab-contents">
            {activeTab === "account" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div className="summaryName">
                  <div
                    style={{
                      backgroundColor: "rgb(239 239 239)",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 24,
                        fontWeight: 600,
                        color: "#000",
                        textAlign: "left",
                        margin: 0,
                        padding: "20 20 15 20",
                      }}
                    >
                      YOUR POINT STATUS
                    </p>
                  </div>

                  <div className="pointStatus">
                    <div className="left-point">
                      <p
                        style={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "#797472",
                          textAlign: "left",
                          margin: 0,
                          paddingTop: 10,
                        }}
                      >
                        You’ve earned {props.currentPoint}100 out of{" "}
                        {props.maxPoint}200 points towards your next reward
                      </p>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          paddingTop: 20,
                        }}
                      >
                        <div className="progressBar" ref={elementRef}>
                          <div className="progressFill"></div>
                          <div className="progressMax">200</div>
                        </div>
                        <p
                          style={{
                            fontSize: 18,
                            fontWeight: 700,
                            color: "#000",
                            position: "relative",
                            right: 0,
                            margin: "15 0 0 -15",
                          }}
                        >
                          200
                        </p>
                      </div>
                      <p
                        style={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "#797472",
                          textAlign: "left",
                          margin: 0,
                          paddingTop: 10,
                          width: '70%'
                        }}
                      >
                        *Points will be updated within 24 hours from in-store purchase or date of shipment for online orders.
                      </p>
                    </div>
                    <div className="right-point">
                      <img
                        style={{ width: "84px", height: "84px" }}
                        src={bluestar}
                        alt=""
                      />

                      <div>
                        <p
                          style={{
                            fontSize: 24,
                            fontWeight: 600,
                            color: "#178BCC",
                            textAlign: "left",
                            margin: 0,
                          }}
                        >
                          MEMBER
                        </p>
                        <p
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#797472",
                            textAlign: "left",
                            margin: 0,
                            paddingTop: 10,
                          }}
                        >
                          Congratulations! You are a member. Promote your status
                          to GOLD by earning 200 points over the next 12 months.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="summaryName">
                  <div
                    style={{
                      backgroundColor: "rgb(239 239 239)",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#000",
                        textAlign: "left",
                        margin: 0,
                        padding: "20 20 20 20",
                      }}
                    >
                      YOUR AVAILABLE REWARDS
                    </p>
                  </div>
                  <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', height: '15em' }}>
                    <p style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#000",
                      textAlign: "center",
                      margin: 0,
                      padding: "20 20 20 20",
                    }}>You currently don’t have any rewards.</p>
                  </div>

                </div>
                <div className="summaryName">
                  <div
                    style={{
                      backgroundColor: "rgb(239 239 239)",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#000",
                        textAlign: "left",
                        margin: 0,
                        padding: "20 20 20 20",
                      }}
                    >
                      YOUR MOST RECENT ORDER
                    </p>
                  </div>
                  <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', height: '15em' }}>
                    <p style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#000",
                      textAlign: "center",
                      margin: 0,
                      padding: "20 20 20 20",
                    }}>You currently don’t have any recent orders.</p>
                  </div>

                </div>

              </div>
            )}
            {activeTab === "personal-data" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div className="summaryName">
                  <div
                    style={{
                      backgroundColor: "rgb(239 239 239)",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 24,
                        fontWeight: 600,
                        color: "#000",
                        textAlign: "left",
                        margin: 0,
                        padding: "20 20 15 20",
                      }}
                    >
                      MANAGE PERSONAL DATA
                    </p>
                  </div>

                  <div className="personalInformation">
                    <div className="left-information">
                      <div style={{ display: 'flex' }}>
                        <p
                          style={{
                            fontSize: 18,
                            fontWeight: 600,
                            color: "#000",
                            textAlign: "left",
                            margin: 0,
                            paddingTop: 10,
                          }}
                        >
                          Edit your information
                        </p>
                        <p
                          style={{
                            fontSize: 18,
                            fontWeight: 500,
                            color: "#797472",
                            textAlign: "left",
                            margin: 0,
                            paddingTop: 10,
                            display: 'flex',
                            marginLeft: 'auto'
                          }}
                        >
                          *Required
                        </p>
                      </div>

                      <div style={{ display: "flex", gap: 10, flexDirection: 'column', paddingTop: 30 }}>
                        <Input className={"profileInput"} type={"text"} placeholder={"First Name*"} />
                        <Input className={"profileInput"} type={"text"} placeholder={"Last Name*"} />
                        <Input className={"profileInput"} type={"email"} placeholder={"Email*"} />
                        <Input className={"profileInput"} type={"text"} placeholder={"Phone Number*"} />
                        <Input className={"profileInput"} type={"text"} placeholder={"Birthday"} />
                        <Input className={"profileInput"} type={"text"} placeholder={"Gender"} />
                      </div>

                      <div
                        id="saveInformationBtn"
                        className="saveInformationBtnContainer"
                      >
                        <button className="saveInformationBtn">Save</button>
                      </div>

                      <div style={{ display: 'flex' }}>
                        <p
                          style={{
                            fontSize: 18,
                            fontWeight: 600,
                            color: "#000",
                            textAlign: "left",
                            margin: 0,
                            paddingTop: 10,
                          }}
                        >
                          Change your password
                        </p>
                        <p
                          style={{
                            fontSize: 18,
                            fontWeight: 500,
                            color: "#797472",
                            textAlign: "left",
                            margin: 0,
                            paddingTop: 10,
                            display: 'flex',
                            marginLeft: 'auto'
                          }}
                        >
                          *Required
                        </p>
                      </div>

                      <div style={{ display: "flex", gap: 10, flexDirection: 'column', paddingTop: 10 }}>
                        <Input className={"profileInput"} type={"password"} placeholder={"Current Password*"} />
                        <Input className={"profileInput"} type={"password"} placeholder={"New Password*"} />
                      </div>
                      <p
                        style={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "#797472",
                          textAlign: "left",
                          margin: 0,
                          paddingTop: 10,
                          display: 'flex',
                        }}
                      >
                        8-255 characters
                      </p>
                      <div style={{ display: "flex", gap: 10, flexDirection: 'column', paddingTop: 10 }}>
                        <Input className={"profileInput"} type={"password"} placeholder={"Confirm New Password*"} />
                      </div>

                      <div
                        id="savePasswordBtn"
                        className="saveInformationBtnContainer"
                      >
                        <button className="saveInformationBtn">Save</button>
                      </div>


                    </div>
                    <div className="right-change-picture">
                      <div className="chooseProfileBtnContainer">
                        <button className="chooseProfileBtn">
                          <img
                            style={{ width: "200px", height: "auto", borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
                            src={choosepicture}
                            alt=""
                          /></button>
                      </div>

                      <div
                        id="saveProfileBtn"
                        className="saveProfileBtnContainer"
                      >
                        <button className="saveProfileBtn">Save Changes</button>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            )}
            {activeTab === "address" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div className="summaryName">
                  <div
                    style={{
                      backgroundColor: "rgb(239 239 239)",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 24,
                        fontWeight: 600,
                        color: "#000",
                        textAlign: "left",
                        margin: 0,
                        padding: "20 20 15 20",
                      }}
                    >
                      ADDRESSES
                    </p>
                  </div>

                  <div className="personalAddresses">
                    <div className="addressesContainer">
                      {/* addresses layout */}
                      <div>
                        <p id="nickname">Usename</p>
                        <hr id="profile-separator"></hr>
                        <h2 id="FullName">UIT STUDENT</h2>
                        <p id="detailAddresss">1018 Tran Phu Loc Chau Bao Loc</p>
                        <div style={{ display: 'flex', gap: '2em', paddingTop: 10 }}>
                          <button className="adjustInformationBtn">Edit</button>
                          <button className="adjustInformationBtn">Delete</button>
                        </div>
                      </div>
                      <div>
                        <p id="nickname">Usename</p>
                        <hr id="profile-separator"></hr>
                        <h2 id="FullName">UIT STUDENT</h2>
                        <p id="detailAddresss">1018 Tran Phu Loc Chau Bao Loc</p>
                        <div style={{ display: 'flex', gap: '2em', paddingTop: 10 }}>
                          <button className="adjustInformationBtn">Edit</button>
                          <button className="adjustInformationBtn">Delete</button>
                        </div>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#000",
                        textAlign: "center",
                        margin: 0,
                        padding: "90 20 15 20",
                        display: 'none'
                      }}
                    >
                      You currently don't have any addresses saved to your account.
                    </p>
                    <div
                      id="addNewAddressBtn"
                      className="addNewAddressBtnContainer"
                      onClick={handleAddAddressClick}
                    >
                      <button className="addNewAddressBtn">Add New Address</button>
                    </div>
                  </div>
                </div>

                {isOverlayAddAddressVisible && (
                  <div className="overlayAddAddress" onClick={handleOverlayBackgroundClick}>
                    <div className="overlayAddAddressContent">
                      <div>
                      <p
                        style={{
                          fontSize: 28,
                          fontWeight: 800,
                          color: "#000",
                          textAlign: "center",
                          margin: 0,
                          padding: "30 20 0 20",
                          textTransform: 'uppercase'
                        }}
                      >
                        add new address
                      </p>
                      <p
                        style={{
                          fontSize: 18,
                          fontWeight: 400,
                          color: "#000",
                          textAlign: "center",
                          margin: 0,
                          padding: "10 20 15 20",
                        }}
                      >
                        Please fill in the information below
                      </p>
                      </div>
                      
                      <div style={{padding:'0 20 0 20'}}>
                      <div style={{ display: 'flex' }}>
                        <p
                          style={{
                            fontSize: 18,
                            fontWeight: 500,
                            color: "#797472",
                            textAlign: "left",
                            margin: 0,
                            paddingTop: 10,
                            display: 'flex',
                            marginLeft: 'auto'
                          }}
                        >
                          *Required
                        </p>
                      </div>
                      <div style={{ display: "flex", gap: 10, flexDirection: 'column', paddingTop: 10,paddingBottom:10 }}>
                        <Input className={"profileInput"} type={"text"} placeholder={"Nickname*"} />
                        <Input className={"profileInput"} type={"text"} placeholder={"First Name*"} />
                        <Input className={"profileInput"} type={"text"} placeholder={"Last Name*"} />
                        <Input className={"profileInput"} type={"text"} placeholder={"Street Address*"} />
                      </div>
                      <Checkbox
                        id="defaultAddressCheckbox"
                        label={defaultAddressLabel}
                        checked={defaultAddressRemember}
                        onChange={() => setdefaultAddressRemember(!defaultAddressRemember)}
                      />
                      <div style={{display:'flex', gap:20}}>
                      <div
                        id="saveNewAddressInformationBtn"
                        className="saveInformationBtnContainer"
                      >
                        <button className="saveInformationBtn">Save Address</button>
                      </div>

                      <div
                        id="cancelNewAddressInformationBtn"
                        className="cancelNewAddressInformationBtnContainer"
                        onClick={handleCancelClick}
                      >
                        <button className="cancelNewAddressInformationBtn">Cancel</button>
                      </div>  

                      </div>
                      
                      </div>
                    </div>
                  </div>
                )}

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
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
