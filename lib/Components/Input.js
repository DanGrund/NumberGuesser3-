import React from 'react';
import NewRange from './NewRange'

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
    this.props.reset();
  }

  render(){
    return(
      <div>
        <input className='numberInput'
          type='number'
          placeholder='enter guess'
          value={this.state.userGuess}
          onChange={(e)=>this.handleChange(e)}
        />
        <button className='submit'
          disabled = {!this.state.userGuess}
          onClick={()=>this.guess()}
        >submit</button>
        <button className='clear'
          disabled = {!this.state.userGuess}
          onClick={()=>this.clear()}
        >clear</button>
        <button className='reset'
          onClick={()=>this.reset()}
        >reset</button>
        <NewRange
          changeRange = {this.props.changeRange}
        />
      </div>

    )
  }
}
