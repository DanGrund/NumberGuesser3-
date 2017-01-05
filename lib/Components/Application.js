import React from 'react';
import Output from './Output';
import Input from './Input';
import Score from './Score'
export default class Application extends React.Component{
  constructor(){
    super();
    this.state = {
      min: 0,
      max: 100,
      randomNumber: null,
      lastGuess: '',
      gameState: 'start',
      score: 100,
    }
  }

  componentDidMount() {
  this.newRandomNumber();
  }

  newRandomNumber() {
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
          this.setState({gameState: 'high', score: +this.state.score-1})
          break;
        case guess < this.state.randomNumber:
          this.setState({gameState: 'low', score: +this.state.score-1})
          break;
        default:
          this.setState({gameState: 'win', score: +this.state.score+100, lastGuess: ''})
          this.newRandomNumber();
      }
    }
  }


  render(){
    return(
      <div>
        <Output
          lastGuess = {this.state.lastGuess}
          gameState = {this.state.gameState}
          min = {this.state.min}
          max = {this.state.max}
        />
        <Input
          guessHandler={this.guessHandler.bind(this)}
        />
        <Score
          score = {this.state.score}
        />
      </div>
    )
  }
}
