import React from "react";

export const Footer = props => {
  return (
    <div
      style={{
        height: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2874A6",
        color: "white",
        fontSize: "16pt"
      }}
    >
      {props.completedCount}/{props.totalCount}
    </div>
  );
};
