import React from "react";

export const TodoListItem = props => {
  return (
    <div style={{ display: "flex", margin: "10px", alignItems: "center" }}>
      <label style={{ flexGrow: 1 }}>
        <input type="checkbox" checked={props.completed} />
        {props.text}
      </label>
      <div>
        <button>Edit</button>
        <button>Del</button>
      </div>
    </div>
  );
};
