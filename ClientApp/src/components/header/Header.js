import React from "react";

export const Header = ({ leftActions, title }) => {
  return (
    <div
      style={{
        height: "45px",
        display: "flex",
        alignItems: "center",
        padding: "3px",
        backgroundColor: "lightsteelblue"
      }}
    >
      {leftActions}
      <span style={{ flexGrow: 1 }}>{title}</span>
      <button>Add</button>
    </div>
  );
};
