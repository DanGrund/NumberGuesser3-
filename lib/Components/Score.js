import React from 'react';

const Score = ({score}) => {
  let scoring = 'Score: ' + (score)
  return(
    <div className='scoring'>
      {scoring}
    </div>
  )
}

export default Score;
