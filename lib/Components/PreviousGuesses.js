import React from 'react';

const PreviousGuesses=({guessArray})=>{

  let guesses = guessArray.map((guess) => <li key={guess.key}>{guess}</li>)

  return(
    <div>
      <ul className='guess-list'>{guesses}</ul>
    </div>
  )
}

export default PreviousGuesses
