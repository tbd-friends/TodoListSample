import React from "react";

export const TodosListItem = props => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "128px",
        height: "128px",
        display: "flex",
        flexDirection: "column",
        margin: "5px",
        padding: "3px"
      }}
    >
      <div
        style={{
          height: "100px",
          width: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center"
        }}
      >
        <div style={{ zIndex: 2 }}>{props.initial}</div>
        {/* <svg>
          <circle cx="50" cy="50" r="50px" stroke="black" />
        </svg> */}
      </div>
      <div style={{ display: "flex" }}>
        <span style={{ flexGrow: 1 }}>{props.title}</span>
        <span>
          {props.completedCount}/{props.totalCount}
        </span>
      </div>
    </div>
  );
};
