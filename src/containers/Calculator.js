import React, { Component } from 'react';
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
    };

    this.handleOnClick=this.handleOnClick.bind(this);
  }

  //Computations
  handleOnClick = (input) => {
    if( input === "1" || input === "2" || input === "3" || input === "4" || input === "5" || input === "6" || input === "7" || input === "8" || input === "9" || input === "0" ){
      return; 
    }else if ( input === "x" || input === "+" || input === "-" || input === "/" || input === "C" || input === "A/C" || input === "%" || input === "=" || input === "+/-" ){
      handleOperations();
      return;
    }

  }

  
  
  render(){
    return (
      <div className="container">
        <div className="calc-body">
          <div className="calc-screen">
            <div className="calc-operation"></div>
            <div className="calc-typed"><span className="blink-me">0</span></div>
          </div>

          <div className="calc-button-row" >
            <div className="button c" onClick={() => this.handleOnClick("C")}> C </div>
            <div className="button c" onClick={() => this.handleOnClick("A/C")}> A/C </div>
            <div className="button l" onClick={() => this.handleOnClick("%")}> % </div>
            <div className="button l" onClick={() => this.handleOnClick("/")}> / </div>
          </div>

          <div className="calc-button-row" >
            <div className="button" onClick={() => this.handleOnClick(7)}> 7 </div>
            <div className="button" onClick={() => this.handleOnClick(8)}> 8 </div>
            <div className="button" onClick={() => this.handleOnClick(9)}> 9 </div>
            <div className="button l" onClick={() => this.handleOnClick("x")}> x </div>
          </div>

          <div className="calc-button-row" >
            <div className="button" onClick={() => this.handleOnClick(4)}> 4 </div>
            <div className="button" onClick={() => this.handleOnClick(5)}> 5 </div>
            <div className="button" onClick={() => this.handleOnClick(6)}> 6 </div>
            <div className="button l" onClick={() => this.handleOnClick("-")}> − </div>
          </div>

          <div className="calc-button-row" >
            <div className="button" onClick={() => this.handleOnClick(1)}> 1 </div>
            <div className="button" onClick={() => this.handleOnClick(2)}> 2 </div>
            <div className="button" onClick={() => this.handleOnClick(3)}> 3 </div>
            <div className="button l" onClick={() => this.handleOnClick("+")}> + </div>
          </div>

          <div className="calc-button-row" >
            <div className="button" onClick={() => this.handleOnClick(".")}> . </div>
            <div className="button" onClick={() => this.handleOnClick(0)}> 0 </div>
            <div className="button" onClick={() => this.handleOnClick("+/-")}> +/- </div>
            <div className="button l" onClick={() => this.handleOnClick("=")}> = </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
