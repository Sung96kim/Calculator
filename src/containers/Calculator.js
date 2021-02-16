import React, { Component } from 'react';

import Keypad from "../components/keypad";
import handleOperations from '../components/handleOperations';
import '../components/blinker';
import './Calculator.css';

class Calculator extends Component{
  constructor(props){
    super(props);

    this.state={
      input: [],
      display: "",
      operation: "",
      result: ""
    };

    this.handleOnClick=this.handleOnClick.bind(this);
  }
  //Computations

  handleOnClick = (input) => {
   
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
