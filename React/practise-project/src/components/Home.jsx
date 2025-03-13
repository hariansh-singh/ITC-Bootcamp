import React from "react";
import ImgDataInfo from "../Services/imgDataInfo";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="container w-75 mb-4">
        <Banner />
      </div>

      {/* Quote Section */}
      <section className="container text-center my-5 p-4 rounded bg-dark text-white">
        <p className="fs-4 fst-italic">
          <span className="text-warning fw-bold fs-2">Music</span> gives a soul
          to the <span className="text-warning">Universe</span>, wings to the{" "}
          <span className="text-warning">Mind</span>, flight to the{" "}
          <span className="text-warning">Imagination</span>, and life to{" "}
          <span className="text-warning">Everything</span>.
        </p>
      </section>

      {/* Title Section */}
      <div className="text-center mb-5">
        <h2 className="text-white py-3 bg-warning rounded-pill fw-bold">
          Explore the World of Guitars
        </h2>
      </div>

      {/* Cards Section */}
      <div className="container">
        <ImgDataInfo />
      </div>
    </>
  );
};

export default Home;
