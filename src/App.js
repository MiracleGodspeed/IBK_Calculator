import logo from './logo.svg';
import './App.css';
import Calculator from "./KeypadInterface"
import Result from "./Result"
import { Component } from 'react';
import "./css/calculator.css"
class App extends Component {
  state = {
        result: ""
    }

  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "AC"){
        this.reset()
    }
    else if(button === "C"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};


calculate = () => {
    try {
        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};


  render(){
    return (
      <div className="App">
                <div>
                    <h1>IBK Calculator</h1>
                    <Result result={this.state.result}/>
                    <Calculator onClick={this.onClick}/>
                </div>
      </div>
      
    );
  }
 
}

export default App;
