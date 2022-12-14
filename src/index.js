import react from "react";
import reactDom from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

reactDom.render(
  <div>
    <h1 style={customStyle}>Hello World</h1>
  </div>,
  document.getElementById("root")
);
