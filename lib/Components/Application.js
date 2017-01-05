import React from 'react';
import Output from './Output';
import Input from './Input';
import Score from './Score';
import GuessCounter from './GuessCounter'

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
      guessCount: 0,
      guessArray: [],
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

  makeItHarder() {
    this.setState({min: +this.state.min-10, max: +this.state.max+10})
  }

  changeRange(newMin, newMax){
    this.setState({min: newMin, max: newMax},()=>this.newRandomNumber())
  }

  reset(){
    this.setState({min: 0, max: 100, lastGuess: '', gameState: 'start', score: 100, guessCount: 0, guessArray: []},
  ()=>this.newRandomNumber())
  }

  saveNewGuess(guess){
    this.state.guessArray.push(Object.assign(guess, { key: Date.now() }));
    this.setState({tasks: this.state.guessArray });
  }

  guessHandler(guess){
    this.saveNewGuess(guess)
    this.setState({lastGuess: guess})
    if (guess > this.state.max || guess < this.state.min){
      this.setState({gameState: 'nope', guessCount: +this.state.guessCount+1})
    } else {
      switch(true){
        case guess > this.state.randomNumber:
          this.setState({gameState: 'high', score: +this.state.score-1, guessCount: +this.state.guessCount+1})
          break;
        case guess < this.state.randomNumber:
          this.setState({gameState: 'low', score: +this.state.score-1, guessCount: +this.state.guessCount+1})
          break;
        default:
          this.setState({gameState: 'win', score: +this.state.score+100, lastGuess: '', guessCount: +this.state.guessCount+1})
          this.newRandomNumber();
          this.makeItHarder();
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
          changeRange={this.changeRange.bind(this)}
          reset={this.reset.bind(this)}
        />
        <Score
          score = {this.state.score}
        />
        <GuessCounter
          guessCount = {this.state.guessCount}
          guessArray = {this.state.guessArray}
        />
      </div>
    )
  }
}
