import React, { Component } from 'react';
import moment from 'moment';

import Results from '../results';
import Form from '../../components/form';
import Saved from '../save';
import Header from '../../components/header';


class Main extends Component {
  constructor() {
    super();
    this.state ={
      searchTerm: '',
      records: 5,
      begin_date: '',
      end_date: '',
      articles: []
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleSearchChange = this.handleSearchChange.bind(this);
  this.handleRecordChange = this.handleRecordChange.bind(this);
  this.handleStartYearChange = this.handleStartYearChange.bind(this);
  this.handleEndYearChange = this.handleEndYearChange.bind(this);
  }
  handleSubmit(e){
    console.log("full state obj", this.state);
    e.preventDefault();
    const { searchTerm, begin_date, end_date} = this.state;
    let start_date = begin_date;
    let final_date = end_date;
    if (begin_date === '') {
      start_date = moment().format('YYYYMMDD');
    }
    if (end_date === ''){
      final_date = moment().add(1, 'y').format('YYYYMMDD');
    }
    const searchQuery = {
      q: searchTerm,
      begin_date: moment(start_date, 'YYYY').format('YYYYMMDD'),
      end_date: moment(final_date, 'YYYY').format('YYYYMMDD')
    }

    fetch("/api/search", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(searchQuery)
    })
    .then((result)=>{
      return result.json()
    })
    .then((response)=> {
      const body = JSON.parse(response.body);
      const articles = body.response.docs;
      this.setState({
        articles
      })
      console.log(articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  handleSearchChange(e){
    this.setState({ searchTerm: e.target.value});
  }
  handleRecordChange(e){
    this.setState({ records: e.target.value});
  }
  handleStartYearChange(e){
    this.setState({ begin_date: e.target.value});
  }
  handleEndYearChange(e){
    this.setState({ end_date: e.target.value});
  }
  render() {
    const { searchTerm, records, begin_date, end_date}=this.state
    console.log('this is the state', this.state);
    return (
      <div>
        <Header />
        <Form
          handleSubmit={this.handleSubmit}
          handleSearchChange={this.handleSearchChange}
          handleRecordChange={this.handleRecordChange}
          handleStartYearChange={this.handleStartYearChange}
          handleEndYearChange={this.handleEndYearChange}
          searchTerm={searchTerm}
          records={records}
          startYear={begin_date}
          endYear={end_date}
        />
        <Results
          articles={this.state.articles}
        />
        <Saved  />
      </div>
    );
  }
}

export default Main
