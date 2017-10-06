import React, { Component } from 'react';


class Saved extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Saved</h3>
        <div style={{height: "309px", overflow: 'scroll'}} className='col-md-7'>

          {this.props.saved_records.map((saved_record, i)=>{
            console.log('saved_records', saved_record);
            return (
              <div key={`${saved_record}-${i}`}>
                {saved_record.title}
              </div>
            )
          })}
        </div>
      </div>

    );
  }
}

export default Saved;
