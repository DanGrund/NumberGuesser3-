import React from 'react';

export default class NewRange extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newMin: '',
      newMax: '',
    }
  }

  changeHandler(){
    this.props.changeRange(this.state.newMin, this.state.newMax);
    this.setState({newMin: '', newMax: ''})
  }

  render(){
    return(
      <div>
        <p>pick a new range if u wanna</p>
        <input
          type='number'
          placeholder='new min'
          value = {this.state.newMin}
          onChange = {(e)=>this.setState({newMin: e.target.value})}
        />
        <input
          type='number'
          placeholder='new max'
          value = {this.state.newMax}
          onChange = {(e)=>this.setState({newMax: e.target.value})}
        />
        <button
          onClick={()=>this.changeHandler()}
        >new range</button>
      </div>
    )
  }
}
