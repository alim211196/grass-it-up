import React from "react";
import "./Loader.css";

const SuspenseLoader = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#edecec",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/loader1.gif" style={{ height: "100%" }} />
    </div>
  );
};

export default SuspenseLoader;
