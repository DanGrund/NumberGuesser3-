import React from 'react';

const Output = ({lastGuess}) => {

  let guessOutput = '';
  if(lastGuess){
    guessOutput = 'your last guess was ' + (lastGuess)
  }

  return(
    <div>
      {guessOutput}
    </div>
  )
}

export default Output;
