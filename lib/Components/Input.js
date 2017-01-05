import React from 'react';

export default class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userGuess: '',
    }
  }

  handleChange(e) {
    this.setState({userGuess: e.target.value})
  }

  guess(){
    this.props.guessHandler(this.state.userGuess)
    this.setState({userGuess: ''})
  }

  clear(){
    this.setState({userGuess: ''})
  }

  reset(){
    this.setState({userGuess: ''})
  }

  render(){
    return(
      <div>
        <input
          type='number'
          placeholder='enter guess'
          value={this.state.userGuess}
          onChange={(e)=>this.handleChange(e)}
        />
        <button
          disabled = {!this.state.userGuess}
          onClick={()=>this.guess()}
        >submit</button>
        <button
          disabled = {!this.state.userGuess}
          onClick={()=>this.clear()}
        >clear</button>
        <button
          onClick={()=>this.reset()}
        >reset</button>
      </div>

    )
  }
}
