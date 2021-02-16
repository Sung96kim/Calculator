import React, { Component } from 'react';

import Keypad from "../components/keypad";
import '../components/blinker';
import './Calculator.css';

class Calculator extends Component{
  constructor(props){
    super(props);

    this.state={
      input: [],
      display: "",
      result: ""
    };

    this.handleOnClick=this.handleOnClick.bind(this);
  }
  //Computations

  handleOnClick = () => {
    this.setState=({
      display: ""
    })
  }

  clear = () => {
    this.setState=({
      result: ""
    })
  }

  backspace = () => {
    
  }



  
  
  render(){
    return (
      <div className="container">
        <Keypad onClick={() => this.handleOnClick} />
      </div>
    );
  }
}

export default Calculator;
