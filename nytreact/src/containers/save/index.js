import React, { Component } from 'react';


class Saved extends Component {
  constructor() {
    super();
    this.state = {
      savedArticles: []
    }
  }
  componentDidMount() {
    fetch('/api/saved').then((results)=>{
      return results.json()
    })
    .then((response)=>{
      console.log('my sick ass results=============', response)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default Saved;
