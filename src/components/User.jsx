import React from "react";
import userPhoto from "../images/Ellipse.png";

export const User = () => {
  return (
    <div className="user">
      <img src={userPhoto} alt="user-1" />
      <div className="user__information">
        <p className="user__name">Evano</p>
        <p className="user__position">Project Manager</p>
      </div>
    </div>
  );
};
