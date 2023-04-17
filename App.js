import React from 'react';
import app from "./App.css"
import Sidebar from './Components/Sidebar';
import Banner from './Components/Banner';
import Stat from './Components/Stat';
import LOwer from './Components/LOwer';
import Tiles from './Components/Tiles';
import Questions from './Components/Questions';
import Slide from './Components/Slide';
import MenuIcon from '@mui/icons-material/Menu';
function App() {
  return (
    <>
    

  <div className='finalall'>
    <div className='finalsmall'>

<MenuIcon sx={{
  color:"#fff",
  margin:"20px",
  width:{
sx:"100%",
sm:"0px"
  }
}} className='icon'/>
  <div className="valve2">
          <span>OX......51XE</span>
          <div className="color"></div>
        </div>
  </div>
</div>
<div className='App'>
  <Sidebar />
<div className='inner'>

<Banner />
<LOwer />
<Slide />
<Tiles />
<Questions />
</div>
<Stat />
</div>
    
    </>
  );
}

export default App;
