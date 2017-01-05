import React from 'react';
import Output from './Output';
import Input from './Input';
export default class Application extends React.Component{



  render(){
    return(
      <div>
        <Output />
        <Input />
      </div>
    )
  }
}
