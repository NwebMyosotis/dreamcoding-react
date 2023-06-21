import React from "react";
import Avatar from "./Avatar";
export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      {isNew === "true" ? <div className="newBox">NEW</div> : ""}
      <Avatar image={image} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
