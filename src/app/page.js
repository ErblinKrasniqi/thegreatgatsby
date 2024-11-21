"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./shared/Navbar/Navbar";
// Import your components for the other pages (commented for now)
import Summary from "./pages/Summary";
import Characters from "./pages/Characters";
// import LiteraryDevice from "./pages/LiteraryDevice";
// import QuestionsAnswers from "./pages/QuestionsAnswers";
// import Quotes from "./pages/Quotes";
// import QuickQuizzes from "./pages/QuickQuizzes";
// import Essays from "./pages/Essays";
// import FurtherStudy from "./pages/FurtherStudy";

const categorieContent = [
  { id: 1, name: "Summary" },
  { id: 2, name: "Characters" },
  { id: 3, name: "Literary Device" },
  { id: 4, name: "Questions & Answers" },
  { id: 5, name: "Quotes" },
  { id: 6, name: "Quick Quizzes" },
  { id: 7, name: "Essays" },
  { id: 8, name: "Further Study" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Summary");

  const renderPage = () => {
    switch (activeCategory) {
      case "Summary":
        return <Summary />;
      case "Characters":
        return <Characters />;
      default:
        return <Summary />;
    }
  };

  return (
    <React.Fragment>
      <Navbar />

      {/* Banner Section */}
      <div className="banner">
        <h1 className="banner-text">The Great Gatsby</h1>
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
