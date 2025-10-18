import React from "react";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      alert("Signed out successfully!");
      window.location.href = "/signin"; // or your login page
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <nav style={{ display: "flex", gap: "20px", backgroundColor: "#eee", padding: "10px" }}>
      <a href="/">Home</a>
      <a href="/post">Post</a>
      <a href="/find-question">Find Question</a>
      <button onClick={handleSignOut}>Sign Out</button>
    </nav>
  );
};

export default NavBar;
