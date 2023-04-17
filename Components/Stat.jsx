import React from "react";
import stat from "../CSS/Stat.css";
function Stat() {
  const statistic = [
    {
      type: "NO NFT",
      value: "",
    },
    {
      type: "Referals",
      value: 0,
    },

    {
      type: "Estimated value",
      value: 0,
    },
    {
      type: "NO NFT",
      value: "",
    },
    {
      type: "Current Tokens",
      value: 0,
    },
    {
      type: "My Earnings",
      value: 0,
    },
    {
      type: "Gpms in 1y",
      value: 0,
    },
    {
      type: "NO NFT",
      value: "",
    },
    {
      type: "Gpms in 1y",
      value: 0,
    },
    {
      type: "Gpms in 1y",
      value: 0,
    },
    {
      type: "Referals",
      value: 0,
    },
  ];

  return (
    <>
      <div className="pinch">
        <div className="valve">
          <span>OX......51XE</span>
          <div className="color"></div>
        </div>
      <div className="statmain">
        <span className="slide slide2">No NFT</span>
        {statistic?.map((stat) => {
            return (
                <div className="slide">
              <span>{stat.type}</span>

              <span>{stat.value}</span>
            </div>
          );
        })}
      </div>
        </div>
    </>
  );
}

export default Stat;
