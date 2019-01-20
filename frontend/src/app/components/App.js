import React from 'react';

export class App extends React.Component{
  render(){
    console.log(this.props.state);
    return <h1>{this.props.timer}</h1>
  }
}