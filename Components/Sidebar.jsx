import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import sidebar from '../CSS/Sidebar.css'
function Sidebar() {

  return (
    <>
    <div className="sidebarmain">
<HomeIcon sx={{
    color:"#fff"
    ,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
    ,width:"30px"
}}/>
<HomeIcon sx={{
     color:"#fff"
     ,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
     ,width:"30px"
}}/>
<HomeIcon sx={{
 color:"#fff"
 ,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
 ,width:"30px"
}}/>
<HomeIcon sx={{
     color:"#fff"
     ,boxShadow:"0px 4px 4px rgb(255, 255, 255)"
     ,width:"30px",
     background:"none"
}}/>
    </div>
    </>
  )
}

export default Sidebar
