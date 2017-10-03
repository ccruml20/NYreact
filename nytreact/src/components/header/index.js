import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <div class="jumbotron">
          <h1>New York Times <small>article search</small></h1>
          <p>Search and Save your own NYT Articles</p>
          </div>
        </div>);
      }
    }
