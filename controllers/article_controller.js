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
      Article.update({ _id : req.params.id }, {
        $set: {
          title : req.body.title,
          content : req.body.content
        }
      },{ new : true }, (err, data)=> {
        err ? res.json({ err }) : res.json({msg:"success update"})
      })
    })
  },
  delete : function(req, res) {
    Article.findByIdAndRemove( req.params.id )
      .exec(function(err, record) {
        err ? res.json({ err }) : res.send(record)
      })
  }
}
