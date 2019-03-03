import React, { Fragment } from 'react';
import './App.scss';
import { setUserName } from '../api/api';

export class App extends React.Component{
  render(){
    console.log(this.props.state);
    return (
      <Fragment>
        <h1>Test</h1>
        <form onSubmit={this.submit}>
        <input name='username' onKeyDown={this.handleInput} placeholder='choose a nickname'/>
        <button type="submit">Submit</button>
      </form>
        
        <button type='submit'>Submit</button>
      </Fragment>
    )
  }

  handleInput = (e) => {
    if(e.key === 'Enter'){
      this.submit(e, e.target.value);
    }
  }

  submit = (e, value = null) => {
    e.preventDefault();
    if(value) {
      console.log(value);
      return setUserName(value);
    } 
    return setUserName(e.target.username.value);
  }
}