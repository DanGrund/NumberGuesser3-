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
    if (guess > this.state.max || guess < this.state.min){
      this.setState({gameState: 'nope'})
    } else {
      switch(true){
        case guess > this.state.randomNumber:
          this.setState({gameState: 'high'})
          break;
        case guess < this.state.randomNumber:
          this.setState({gameState: 'low'})
          break;
        default:
          this.setState({gameState: 'win'})
      }
    }
  }


  render(){
    return(
      <div>
        <Output
          lastGuess = {this.state.lastGuess}
          gameState = {this.state.gameState}
        />
        <Input
          guessHandler={this.guessHandler.bind(this)}
        />
      </div>
    )
  }
}
