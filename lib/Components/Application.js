import React from 'react';
import Output from './Output';
import Input from './Input';
export default class Application extends React.Component{
constructor(){
  super();
  this.state = {
    min: 0,
    max: 100,
    randomNumber: null,
    lastGuess: '',
    gameState: 'start',
  }
}

componentDidMount() {
this.getARandomNumber();
}

getARandomNumber() {
this.setState({
  randomNumber: Math.floor(Math.random() * (+this.state.max - +this.state.min + 1)) + +this.state.min
});
}


  guessHandler(guess){
    this.setState({lastGuess: guess})
  }


  render(){
    return(
      <div>
        <Output
          lastGuess = {this.state.lastGuess}
        />
        <Input
          guessHandler={this.guessHandler.bind(this)}
        />
      </div>
    )
  }
}
