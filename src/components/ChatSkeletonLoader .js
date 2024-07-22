import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ChatSkeleton = () => {
  const bubbleStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100vw",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <div
      style={{
        padding: "10px",
        width: "100vw",
        margin: "0 auto",
        backgroundColor: "#e5ddd5",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ ...bubbleStyle, backgroundColor: "#dcf8c6" }}>
          <Skeleton width={120} height={20} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ ...bubbleStyle, backgroundColor: "#fff" }}>
          <Skeleton width={50} height={20} />
          <Skeleton width={180} height={20} style={{ marginTop: "5px" }} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ ...bubbleStyle, backgroundColor: "#fff" }}>
          <Skeleton width={90} height={20} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ ...bubbleStyle, backgroundColor: "#dcf8c6" }}>
          <Skeleton width={50} height={20} />
          <Skeleton width={180} height={20} style={{ marginTop: "5px" }} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ ...bubbleStyle, backgroundColor: "#dcf8c6" }}>
          <Skeleton width={40} height={20} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Skeleton width={150} height={20} style={{ margin: "20px 0" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ ...bubbleStyle, backgroundColor: "#fff" }}>
          <Skeleton width={50} height={20} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ ...bubbleStyle, backgroundColor: "#fff" }}>
          <Skeleton width={240} height={20} />
        </div>
      </div>
    </div>
  );
};

export default ChatSkeleton;
