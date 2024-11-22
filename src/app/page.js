"use client";
import React, { useState } from "react";

// Import your components for the other pages (commented for now)

import Image from "next/image";
import backG from "../Assets/images/backG.gif";
import styles from "../Assets/scss/uppersection.module.scss";

import Summary from "./pages/Summary";
import Introduction from "./pages/Introduction";
import Gatsbysbelief from "./pages/Gatsbysbelief";
import Reality from "./pages/Reality";
import Livingpast from "./pages/Livingpast";
import Behavior from "./pages/Behavior";
import Experience from "./pages/Experience";
import Forward from "./pages/Forward";
import Illusion from "./pages/Illusion";

const categorieContent = [
  { id: 1, name: "Can you really repeat the past?!" },
  { id: 2, name: "Introduction" },
  { id: 3, name: "Gatsbysbelief" },
  { id: 4, name: "Reality" },
  { id: 5, name: "Livingpast" },
  { id: 6, name: "Behavior" },
  { id: 7, name: "experience" },
  { id: 8, name: "Forward" },
  { id: 9, name: "Illusion" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Summary");

  const renderPage = () => {
    switch (activeCategory) {
      case "Summary":
        return <Summary />;
      case "Introduction":
        return <Introduction />;
      case "Gatsbysbelief":
        return <Gatsbysbelief />;
      case "Reality":
        return <Reality />;
      case "Livingpast":
        return <Livingpast />;
      case "Behavior":
        return <Behavior />;
      case "experience":
        return <Experience />;
      case "Forward":
        return <Forward />;
      case "Illusion":
        return <Illusion />;
      default:
        return <Summary />;
    }
  };

  return (
    <React.Fragment>
      {/* Banner Section */}

      <div className={styles.containerS}>
        <div></div>
        <div className={styles.text}>
          <h1>
            We design <br /> the feature
          </h1>
          <p>lorem ibsut lorem ibsut this is lorem</p>
        </div>
        <Image src={backG} alt="nothing" />
      </div>

      <div className="container mt-4">
        {/* Categories Bar */}
        <div className="d-flex justify-content-between flex-wrap">
          {categorieContent.map((categorie) => (
            <div
              key={categorie.id}
              className={`text-center px-3 py-2 ${
                activeCategory === categorie.name
                  ? "border-bottom border-dark"
                  : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveCategory(categorie.name)}
            >
              <h6>{categorie.name}</h6>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-4">{renderPage()}</div>
      </div>
    </React.Fragment>
  );
}
