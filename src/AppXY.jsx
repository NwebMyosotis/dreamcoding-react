import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (event) => {
    setX(event.clientX);
    setY(event.clientY);
    console.log(x, y);
  };
  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="pointer" style={{ left: x - 15, top: y - 15 }} />
    </div>
  );
}
