import React from 'react';

const Score = ({score}) => {
  let scoring = 'Score: ' + (score)
  return(
    <div>
      {scoring}
    </div>
  )
}

export default Score;
