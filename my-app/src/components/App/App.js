import './App.css'; 
import react, { Component } from 'react';

class App extends Component {
    state = {
        value1: 0,
        value2: 0,
        result: 0,
        action:"+"
    };

    onInput1Change = (e) => {
        this.setState({
            value1: e.target.value,
        });
    };
    onInput2Change = (e) => {
      this.setState({
          value2: e.target.value,
      });
  };
    onChangeAction=(e)=>{
      this.setState({
        action: e.target.value,
      });
  }
    onCalculate = () => {
        switch(this.state.action){
          case "+": return this.setState({
            result: +this.state.value1+(+this.state.value2),
            });
          case"-": return this.setState({
            result: +this.state.value1-(+this.state.value2),
            });
          case"*": return this.setState({
              result: +this.state.value1*(+this.state.value2),
              });
          case"/": return this.setState({
              result: +this.state.value1/(+this.state.value2),
                });
        }
        
    };
   

    render() {
        return (
            <div>
               
                <input value={this.state.value1} onChange={this.onInput1Change} />
                <select onChange={this.onChangeAction}>
                  <option value="+" >+</option>
                  <option value="-">-</option>
                  <option value="*">*</option>
                  <option value="/">/</option>
                </select>
                <input value={this.state.value2} onChange={this.onInput2Change} />
                <button onClick={this.onCalculate}>Calculate</button>
              <div>={this.state.result }</div>         
            </div>
        );
    }
}

export default App;