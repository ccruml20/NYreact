const Article = require('../schema/articles');

module.exports = {
  getArticles(cb){
    Article.find((err, articles)=>{
      if(!err){
        return cb(null, articles)
      }
      cb(err, null)
    })
  },
  saveArticle(articleToSave, cb){
    const article = new Article(articleToSave);
    article.save().then((item)=>{
      return cb(null, item)
    })
    .catch((err)=>{
      cb(err, null);
    })
  },
  deleteArticle(id, cb){
    Article.deleteOne({_id: id})
    .then((delArticle)=>{
      cb(null, delArticle)
    }).catch((err)=>{
      cb(err, null);
    })
  }
}
