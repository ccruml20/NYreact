const express = require('express');

const Article = require('../model/model');

const router = express.Router();

router.get('/', (req, res) => {
  Article.getArticles((err, articles)=>{
    if(!err){
      console.log(articles, 'this is only a test');
      res.send(articles);
    }
  })
});

router.post('/api/saved', (req, res) =>{
  Article.saveArticle((err, articleToSave)=>{
    if(!err){
      res.send(articleToSave)
      console.log('______This is the article to save', articleToSave)
    }
  })
})

module.exports = router;
