const express = require('express');

const Article = require('../model/model');

const router = express.Router();

router.get('/', (req, res) => {
  Article.getArticles((err, articles)=>{
    if(!err){
      res.send(articles);
    }
  })
});

router.post('/', (req, res) =>{
  Article.saveArticle((err, articleToSave)=>{
    if(!err){
      console.log('______This is the article to save', articleToSave)
    }
  })
})

module.exports = router;
