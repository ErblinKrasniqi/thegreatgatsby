"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      {/* Page Title */}
      <div className="navbar-brand">
        <h2 className="mb-0">The Great Gatsby</h2>
      </div>

      {/* Spacer */}
      <div className="flex-grow-1"></div>

      {/* Profile Icon */}
      <div className="d-flex align-items-center">
        <div
          className="rounded-circle d-flex justify-content-center align-items-center bg-secondary"
          style={{
            width: "40px",
            height: "40px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {/* Hamburger Icon */}
          <div
            className="d-flex flex-column justify-content-between"
            style={{
              width: "18px",
              height: "14px",
              position: "absolute",
            }}
          >
            <span
              className="bg-white"
              style={{
                height: "2px",
                width: "100%",
                marginBottom: "2px",
              }}
            ></span>
            <span
              className="bg-white"
              style={{
                height: "2px",
                width: "100%",
                marginBottom: "2px",
              }}
            ></span>
            <span
              className="bg-white"
              style={{
                height: "2px",
                width: "100%",
              }}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
