var db = require('../db');

module.exports.postCreate = function(req, res, next){
  var errors = [];
  if(req.body.name.length > 30){
    errors.push('Length > 30');
  }
  
  if(errors.length){ //falsy
       res.render('users',{
         users: db.get("users").value(),
          errors: errors
        });
  }
  next();
  
};