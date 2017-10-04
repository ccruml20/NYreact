import React from 'react';

export default class Results extends React.Component {
  constructor(props){
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleSubmit(e, article){
  e.preventDefault();
  const articleToSave = {
    title: article.headline.main,
    date: article.pub_date,
    url: article.uri
  }
  console.log(articleToSave)
  fetch ("/api/saved", {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(articleToSave)
})
.then((result)=>{
  console.log(result, "Im the mother lovin' result");
  return result.json()
})
.then((response)=>{
  const body = JSON.parse(response.body);
  console.log(body, "==========================================");
}).then((err)=>{
  throw err
})
 };

  render() {

    return (
      <div className="container">
        Results
        {this.props.articles.map((article,i)=>{
          // let imageSrc = article.multimedia[2].legacy.thumbnail
          // console.log(imageSrc)
          // let headlineStyle = {
          //   color: 'blue',
          //   backgroundImage: 'url(' + imageSrc + ')',
          // }
          // console.log(JSON.stringify(article.multimedia[2].url)

          return (
            <div key={`${article.headline.main}-${i}`}>
              <div className="row" >
                <div className='col-md-1'>
                  <button onClick={(e)=>this.handleSubmit(e,article)} value={article} className="btn-default">Save</button>
                </div>
                <div className='col-md-11'>
                  {article.headline.main}
                </div>
                <br></br>
              </div>
            </div>

          )
        })}
      </div>);
    }
  }
