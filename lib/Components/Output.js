import React from 'react';

const Output = ({lastGuess, gameState, min, max}) => {

  let hint = ''

  switch(gameState){
    //cases can be start, high, low, win
    case 'start':
      hint = 'guess a number between ' + (min) + ' & ' + (max)
      break;
    case 'high':
      hint = 'You guessed too high'
      break;
    case 'low':
      hint = 'You guessed too low'
      break;
    case 'win':
      hint = 'you won! pick a new number between ' + (min) + ' & ' + (max)
      break;
    case 'nope':
      hint = 'pick a number within the range plz'
  }

  let guessOutput = '';
  if(lastGuess){
    guessOutput = 'your last guess was ' + (lastGuess)
  }

  return(
    <div>
      <p className='guess-output'>{guessOutput}</p>
      <p className='hint'>{hint}</p>
    </div>
  )
}

export default Output;
