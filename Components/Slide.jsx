import React from 'react'
import image from '../Assets/bitch.png'
import lower from '../CSS/LOwer.css'
function Slide() {
  return (
   <>
   <div className="lastlong">

   <div className="slider">
   <div className="pngs">
            <img src={image} alt="none" className="ninja"/>
          </div> <div className="pngs">
            <img src={image} alt="none" className="ninja"/>
          </div> <div className="pngs">
            <img src={image} alt="none" className="ninja"/>
          </div> <div className="pngs">
            <img src={image} alt="none" className="ninja"/>
          </div> <div className="pngs">
            <img src={image} alt="none" className="ninja"/>
          </div>
   </div>
   </div>
   </>
  )
}

export default Slide