import React, { Component } from 'react'
import './Calculator.css'

class Calculator extends Component {
  state = {
        result: 1024,
        equation: '256 x 4'
      }


onButtonPress = event => {
    let equation = this.state.equation;
    const pressedButton = event.target.value;
   if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equation += pressedButton;
    else if (['+', '-', '*', '/', '%','+/-'].indexOf(pressedButton) !== -1) equation += ' ' + pressedButton + ' ';
    else if (pressedButton === '=') {
      try {
        const evalResult = eval(equation);
        const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
        this.setState({result});
      } catch (error) {
      }
    }
    else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
      equation=equation.parseFloat()
    }       
    this.setState({equation: equation});
  }

  clear=()=> {
    this.setState({equation: '', result: 0});
  }

  convertToIndianFormat = (number) => {
    number = Number(number)
    if (number) {
        number = number.toString();
        var lastThree = number.substring(number.length - 3);
        var otherNumbers = number.substring(0, number.length - 3);
        if (otherNumbers !== '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    }
    else {
        return number;
    }
}
    render() {
        return (
            <div className="container">
                <div className="calculator">
                <div className="operatevalues"> {this.state.equation}</div>
               <div className="resultscreens">{this.convertToIndianFormat(this.state.result)}</div>
               <div className="buttongroup">
                    <button className="button" value='C' onClick={()=>this.clear()}>C</button>
                    <button className="button" value='+/-' onClick={(e)=>this.onButtonPress(e)}>+/-</button>
                    <button className="button"  value='%' onClick={(e)=>this.onButtonPress(e)}>%</button>
                    <button className="button operators" value='/' onClick={(e)=>this.onButtonPress(e)}>÷</button>
                    <button className="button" value='7' onClick={(e)=>this.onButtonPress(e)}>7</button>
                    <button className="button" value='8' onClick={(e)=>this.onButtonPress(e)}>8</button>
                    <button className="button"  value='9' onClick={(e)=>this.onButtonPress(e)}>9</button>
                    <button className="button operators"  value='*' onClick={(e)=>this.onButtonPress(e)}>×</button>
                    <button className="button"  value='4' onClick={(e)=>this.onButtonPress(e)}>4</button>
                    <button className="button" value='5' onClick={(e)=>this.onButtonPress(e)}>5</button>
                    <button className="button" value='6' onClick={(e)=>this.onButtonPress(e)}>6</button>
                    <button className="button operators" value='-'  onClick={(e)=>this.onButtonPress(e)}>-</button>
                    <button className="button" value='1' onClick={(e)=>this.onButtonPress(e)}>1</button>
                    <button className="button" value="2" onClick={(e)=>this.onButtonPress(e)}>2</button>
                    <button className="button" value='3' onClick={(e)=>this.onButtonPress(e)}>3</button>
                    <button className="button operators" value='+' onClick={(e)=>this.onButtonPress(e)}>+</button>
                    <button className="button" value='0' onClick={(e)=>this.onButtonPress(e)}>0</button>
                    <button className="button" value='.' onClick={(e)=>this.onButtonPress(e)}>.</button>
                    <button className="button equalicon" value='='  onClick={(e)=>this.onButtonPress(e)}>=</button>
                </div>
                </div>
            </div>

        )
    }
}
export default Calculator;