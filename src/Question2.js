import React, { Component } from 'react';

class Question2 extends Component {

  constructor(props){
    super(props);
    this.state = {
        count: null
    }
  }

  getString(e){
    let str = e.target.value;
    //let str = "Walmart Technology is reinventing the way the world shops and we’ve only just begun. Our team includes @Walmart Labs in Silicon Valley and Bengaluru, which powers the eCommerce experience, as well as technology teams across data and analytics, retail back office and more who help power store and digital experiences";
    var wordCounts = { };
    var words = str.split(/\b/);

    for(var i = 0; i < words.length; i++){
      wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    }
    console.log(wordCounts)
    this.setState({
      count: wordCounts
    })
    
  }

  render() {
    return (
      <div className="container">
        <input type="text" onChange={this.getString.bind(this)} placeholder="Enter your String here.." />
        <h2>Result</h2>
        {JSON.stringify(this.state.count)}
      </div>
    );
  }
}

export default Question2;
