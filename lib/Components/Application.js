import React from 'react';
import Output from './Output';
import Input from './Input';
export default class Application extends React.Component{
constructor(){
  super();
  this.state = {
    min: 0,
    max: 100,
    lastGuess: '',
  }
}

  guessHandler(guess){
    this.setState({lastGuess: guess})
  }


  render(){
    return(
      <div>
        <Output />
        <Input
          guessHandler={this.guessHandler.bind(this)}
        />
      </div>
    )
  }
}
