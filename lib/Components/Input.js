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
    this.seState({userGuess: ''})
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
          onClick={()=>this.guess()}
        >submit</button>
        <button>clear</button>
        <button>reset</button>
      </div>

    )
  }
}
