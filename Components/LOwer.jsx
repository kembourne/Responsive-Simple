import React from 'react'
import lower from '../CSS/LOwer.css'
import Slide from './Slide';
import { Typography } from "@mui/material";
import Tiles from './Tiles';
import Questions from './Questions';
function LOwer() {
  return (
    <>
    <Typography variant="h4" sx={{
      color:"#fff",marginTop:"10px"
      
    }}>
    NFT Levels
    </Typography>
    <Typography variant="h6" sx={{
      color:"#fff",marginTop:"10px"
    }}>
    Click on each to see more details.
    </Typography>


{/* <Slide /> */}


    </>
  )
}

export default LOwer