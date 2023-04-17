import React from 'react'
import lower from '../CSS/LOwer.css'
import avif from '../Assets/bitcoin.png'
import Questions from './Questions'
function Tiles() {
  return (
  <>
  <div className="tilemain">
    <div className="tileinner">

    
    <div className="tile">
<span>
    NFT Price
</span>
<span>
<img src={avif} alt="none" className='bitcoinimage'/>
0
</span>
    </div>
    <div className="tile">
    <span>
    NFT Price
</span>
<span>
<img src={avif} alt="none" className='bitcoinimage'/>  
0
</span>
    </div>
    </div>
    <div className="tileinner">

    
    <div className="tile">
    <span>
    NFT Price
</span>
<span>
<img src={avif} alt="none" className='bitcoinimage'/>
0%
</span>
    </div>
    <div className="tile">
    <span>
    NFT Price
</span>
<span>
<img src={avif} alt="none" className='bitcoinimage'/>
100
</span>
    </div>
  </div>
  </div>

  </>
  )
}

export default Tiles