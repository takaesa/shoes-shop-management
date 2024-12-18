import React from "react";
import "./css/home.css";

import sellerlogo from "../svg/sellerlogo.svg";
import profileimg from "../svg/profileimg.svg";
import SellingProductAmount from "./component/SellingProductAmount";
import hamburger from "../svg/hamburger.svg";
import sellersearch from "../svg/sellersearch.svg";
import sellermessage from "../svg/sellermessage.svg";
import sellernotification from "../svg/sellernotification.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { useState } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Selected date:", newDate);
  };

  const monthsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    data: [30, 45, 55, 60, 70, 65, 80, 85, 90, 100, 110, 120], // Example data
  };

  const [chartType, setChartType] = useState("line");
  const [rangeValue, setRangeValue] = useState(6); // Default to 6 months

  const filteredMonths = monthsData.labels.slice(0, rangeValue);
  const filteredData = monthsData.data.slice(0, rangeValue);

  const chartData = {
    labels: filteredMonths,
    datasets: [
      {
        label: "Statistics",
        data: filteredData,
        backgroundColor:
          chartType === "line"
            ? "rgba(75, 192, 192, 0.2)"
            : "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        tension: chartType === "line" ? 0.4 : 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  const handleRangeChange = (event) => {
    setRangeValue(Number(event.target.value));
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };
  return (
    <div style={{ display: "flex", height: "100vh", width: "auto" }}>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="managerContainer">
          <div className="sellerLogoContainer">
            <img className="sellerLogo" src={sellerlogo} alt="" />
          </div>
          SELLER
        </div>
        <hr className="sidebar-separator" />

        <div className="profileContainer">
          <div className="profileImgContainer">
            <img className="profileImg" src={profileimg} alt="" />
          </div>
          <p className="username">Alexander Smith aasdf alksdjflksaj asdlkfj</p>
        </div>

        <div class="sidebar">
          <nav className="menu">
            <ul>
              <li className="active ">
                <a className="menuItem" href="/sellerhome">
                  Home
                </a>
              </li>
              <li className=" ">
                <a className="menuItem" href="/sellerproducts">
                  Products
                </a>
              </li>
              <li className=" ">
                <a className="menuItem" href="/sellerorders">
                  Orders
                </a>
              </li>{" "}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="main-content">
        <header className="content-header">
          <div>
            <button className="menu-toggle">
              <img src={hamburger} alt="" />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              paddingRight: "1rem",
              gap: "1rem",
            }}
          >
            <div className="message-button">
              <img
                style={{ width: "24px", aspectRatio: "1/1" }}
                src={sellersearch}
                alt=""
              />
            </div>
            <div className="message-button">
              <img
                style={{ width: "24px", aspectRatio: "1/1" }}
                src={sellermessage}
                alt=""
              />
              <span className="message-badge">1</span>
            </div>
            <div className="message-button">
              <img
                style={{ width: "24px", aspectRatio: "1/1" }}
                src={sellernotification}
                alt=""
              />{" "}
              <span className="notification-badge">1</span>
            </div>
          </div>
        </header>
        <section className="dashboard">
          <div className="sellingProducts">
            <SellingProductAmount />
            <SellingProductAmount />
            <SellingProductAmount />
            <SellingProductAmount />
            <SellingProductAmount />
          </div>

          <div style={{ display: "flex", paddingTop: "2rem" }}>
            <div className="statistic-container">
              <div className="chart-container">
                {chartType === "line" ? (
                  <Line data={chartData} options={chartOptions} />
                ) : (
                  <Doughnut data={chartData} options={chartOptions} />
                )}
              </div>

              <div className="scroll-month-container">
                <input
                  type="range"
                  id="monthRange"
                  min="6"
                  max="12"
                  step="1"
                  value={rangeValue}
                  onChange={handleRangeChange}
                />
                <label htmlFor="monthRange">
                  Month Range: <span id="monthValue">{rangeValue}</span>
                </label>
              </div>
            </div>
            <div
              style={{
                height: "fit-content",
                display: "flex",
                marginLeft: "auto",
              }}
            >
              <Calendar onChange={handleDateChange} value={date} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
