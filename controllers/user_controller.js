const User = require('../models/user')
const bcrypt = require('bcrypt')
require('dotenv').config()
console.log(process.env.saltRounds);
module.exports = {
  insert : function(req, res) {
    let hash = bcrypt.hashSync(req.body.password, 8)
    let user = new User
    user.username = req.body.username
    user.password = hash
    // User.create(req.body, function(err, record) {
    //   console.log(err);
    //   console.log(record);
    //   err ? res.json({ err }) : res.json(record)
    // })
    user.save((err)=>{
      if(err)
        console.log(err);
    })
    res.json(user)
  },
  getAll: function(req,res){
    User.find({}, (err, records)=>{
      err ? res.json({ err }) : res.json(records)
    })
  },
  getOne: function(req,res){
    User.findById( req.params.id , (err, record)=>{
      err ? res.json({ err }) : res.json(record)
    })
  },
  update: function(req,res){
    let hash = bcrypt.hashSync(req.body.password, 8)
    User.findById( req.params.id , (err, record)=>{
      if(err)
        res.json({ err })
        User.update({ _id : req.params.id }, {
          $set: {
            username : req.body.username,
            password : hash
          }
        },{ new : true }, (err, data)=> {
          err ? res.json({ err }) : res.json({msg:"success update"})
        })
    })
  },
  delete : function(req, res) {
    User.findByIdAndRemove( req.params.id )
      .exec(function(err, record) {
        err ? res.json({ err }) : res.send(record)
      })
  }
}
