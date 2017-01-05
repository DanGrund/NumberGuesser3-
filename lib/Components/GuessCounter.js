import React from 'react';

const GuessCounter = ({guessCount}) => {

  let guesses = "You've made " + (guessCount) + " guesses"
  return(
    <div>
      <p>{guesses}</p>
    </div>
  )
}

export default GuessCounter;
