import React, { useState, useEffect } from "react";

export const Status = () => {
  const [userStatusList, setUserStatusList] = useState([]);

  const generateRandomUserStatus = () => {
    return Math.random() < 0.5 ? true : false;
  };

  useEffect(() => {
    const randomStatusList = Array.from(
      { length: 1 },
      generateRandomUserStatus
    );
    setUserStatusList(randomStatusList);
  }, []);

  return (
    <div>
      {userStatusList.map((status, index) => (
        <div
          key={index}
          className={`status ${status ? "status-active" : "status-inactive"}`}
        >
          {status ? "Active" : "Inactive"}
        </div>
      ))}
    </div>
  );
};
