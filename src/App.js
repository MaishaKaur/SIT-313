import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostPage from "./pages/PostPage";
import FindQuestion from "./pages/FindQuestion";

function App() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "lightgray", // light cream
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  };

  const linkStyle = {
    marginLeft: "16px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    transition: "all 0.2s",
  };

  const linkHover = (e) => {
    e.target.style.color = "darkgray";
    e.target.style.transform = "scale(1.05)";
  };

  const linkLeave = (e) => {
    e.target.style.color = "#333";
    e.target.style.transform = "scale(1)";
  };

  return (
    <div>
      <nav style={navStyle}>
        <h1 style={{ margin: 0, color: "Black", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
          Posts
        </h1>
        <div>
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={linkHover}
            onMouseLeave={linkLeave}
          >
            New Post
          </Link>
          <Link
            to="/find-question"
            style={linkStyle}
            onMouseEnter={linkHover}
            onMouseLeave={linkLeave}
          >
            Find Question
          </Link>
        </div>
      </nav>

      <main style={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/find-question" element={<FindQuestion />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
