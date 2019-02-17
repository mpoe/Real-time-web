import React from 'react';
import './App.scss';

export class App extends React.Component{
  render(){
    console.log(this.props.state);
    return <h1>Test</h1>
  }
}