import React from 'react';
import PreviousGuesses from './PreviousGuesses';

export default class GuessCounter extends React.Component{

  constructor(props){
    super(props);
    this.state={
      show: false,
      buttonText: 'show guesses'
    }
  }

  showHide(){
    this.setState({show: !this.state.show});
    switch(this.state.buttonText){
      case 'show guesses':
        this.setState({buttonText: 'hide guesses'});
        break;
      case 'hide guesses':
        this.setState({buttonText: 'show guesses'})
    }
  }

  render(){
    return(
      <div>
        <p className='guess-count'>You've made {this.props.guessCount} guesses</p>
        <button className='show-guesses'
          onClick={()=>this.showHide()}
        >{this.state.buttonText}</button>
        {this.state.show ? <PreviousGuesses guessArray = {this.props.guessArray}/> : null}
      </div>
    )
  }
}
