// src/App.js
import React from "react";
import ChatSkeleton from "./components/ChatSkeletonLoader ";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container mt-5">
      <h1>Loading Chat Messages</h1>
      {Array.from({ length: 10 }).map((_, idx) => (
        <div
          key={idx}
          className={`d-flex mb-2 ${
            idx % 2 === 0 ? "justify-content-end" : "justify-content-start"
          }`}
        >
          <ChatSkeleton
            type={idx % 3 === 0 ? "short" : idx % 3 === 1 ? "long" : "full"}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
