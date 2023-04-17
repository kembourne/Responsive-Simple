import React from "react";
import banner from "../CSS/Banner.css";
import image from "../Assets/NFT-Art-PNG.png";
import { Typography } from "@mui/material";
function Banner() {
  return (
    <div className="bannermain">
      <div className="bannerleft">
        <Typography
          variant="h4"
          
          sx={{
            size: "32px",
            color: "#fff",
            fontSize: "popins",
            fontWeight: 700,
            wordBreak:"break"
          }}
        >
          To start, select the NFT level you want
        </Typography>
        ;
        <Typography variant="h4" className="headingbottom">
          Choose your NFT below
        </Typography>
      </div>
      <div className="bannerright">
        <div className="one">
          <div className="png">
            <img src={image} alt="none" className="ninja"/>
          </div>
          <div className="png">
            <img src={image} alt="none" className="ninja"/>
          </div>
        </div>
        <div className=" two">
          <div className="png">
            <img src={image} alt="none" className="ninja"/>
          </div>
          <div className="png">
            <img src={image} alt="none" className="ninja"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
