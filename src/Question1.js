import React, { Component } from 'react';

class Question1 extends Component {

  constructor(props){
    super(props);
    this.state = {
        stringRev: []
    }
  }

  getString(e){
    let str = e.target.value;
    this.reverseString(str);
  }

  reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    this.setState({
      stringRev: joinArray
    })
    return joinArray;
  }

  render() {
    return (
      <div className="container">
        <input type="text" onChange={this.getString.bind(this)} placeholder="Enter your String here.." />
        <h2>Result</h2>
        {this.state.stringRev}
      </div>
    );
  }
}

export default Question1;
