import React from "react";
export default function Avatar({ image }) {
  return (
    <>
      <img className="photo" src={image} alt="avatar" />
    </>
  );
}
