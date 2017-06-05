const Article = require('../models/article')

module.exports = {
  insert : function(req, res) {
    let article = new Article
    article.title = req.body.title
    article.content = req.body.content
    // Article.create(req.body, function(err, record) {
    //   console.log(err);
    //   console.log(record);
    //   err ? res.json({ err }) : res.json(record)
    // })
    article.save((err)=>{
      if(err)
        console.log(err);
    })
    res.json(article)
  },
  getAll: function(req,res){
    Article.find({}, (err, records)=>{
      err ? res.json({ err }) : res.json(records)
    })
  },
  getOne: function(req,res){
    Article.findById( req.params.id , (err, record)=>{
      err ? res.json({ err }) : res.json(record)
    })
  },
  update: function(req,res){
    Article.findById( req.params.id , (err, record)=>{
      if(err)
        res.json({ err })
      let article = new Article
      article.title = req.body.title
      article.content = req.body.content
      article.save((err)=>{
        if(err)
          console.log(err);
      })
      res.json(article)
    })
  },
  delete : function(req, res) {
    Article.findByIdAndRemove( req.params.id )
      .exec(function(err, record) {
        err ? res.json({ err }) : res.send(record)
      })
  }
}
