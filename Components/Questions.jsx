import React from 'react'
import lower from '../CSS/LOwer.css'
function Questions() {
  return (<div className="center">
   <div className="questions">
    <div className="question">
<span className="span1">
Choose a Username*
</span>
<span className="span2">
You’ll use it to share with friends and earn rewards!
</span>
<input type="text" className="input" />
    </div>
    <div className="question">

    <span className="span1">
    Did you get invited to GPM?
</span>
<span className="span2">
If so, please enter your referrer’s username.
</span>
<input type="text" className="input" />
    </div>
   </div>
    <div className="button">
        GET MY NFT
    </div>
    </div>
  )
}

export default Questions