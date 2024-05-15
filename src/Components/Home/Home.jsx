import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Blogs from "../Blogs/Blogs";
const Home = () => {
  return (
    <div
      style={{
        zIndex: 999,
        position: "relative",
      }}
    >
      <section className="wrapper">
        <Sidebar />
        <Blogs />
      </section>
    </div>
  );
};

export default Home;
