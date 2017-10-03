import React, {PropTypes} from 'react';

export default class Results extends React.Component {
  constructor(props){
  super(props);
  this.setState ={
    article: []
  }
  this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleSubmit(event, aritcle){
  event.preventDefault();
  console.log("clicked button and its value", article);
  const savedArticle = {
    "title": event.target.value.headline.main
  }
  console.log('***********', savedArticle.title);
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
            <div>
              <div className="row" key={`${article.headline.main}-${i}`}>
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
