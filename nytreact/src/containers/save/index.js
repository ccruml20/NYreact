import React, { Component } from 'react';


class Saved extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{height: "390px", overflow: 'scroll'}} className='col-md-6-offset-1'>
        <h3 style={{textAlign: 'center'}}>Saved</h3>
        {this.props.saved_records.map((saved_record, i)=>{
          console.log('saved_records', saved_record);
          return (
            <div key={`${saved_record}-${i}`}>
              {saved_record.title}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Saved;
