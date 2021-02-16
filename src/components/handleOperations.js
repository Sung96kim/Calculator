import React, {Component} from "react";
import Calculator from '../containers/Calculator';

export default class HandleOperations extends Component{   
    render(props){
        switch (props.input) {
          case 'C':
            this.setState={ display: "" };
                
          case 'A/C':
            this.setState={ 
              input: [],
              display: "",
              operation: "", 
            };
            break;
          
            case '%':
                break;
    
            case '/':
                break;
              
            case 'x':
                break;
              
            case '-':
                break;
              
            case '+':
                break;
              
            case '.':
            //   this.setState={display: " " + "."}
                break;
    
            case '=':
              
                break;
          default:
            break;
        }
            return;
        }
    }
