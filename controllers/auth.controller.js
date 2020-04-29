var db = require('../db');
var md5 = require('md5');
module.exports.login = function(req, res){
    res.render('auth/login');
};

module.exports.postLogin = function(req, res){
    var email = req.body.email;
    var password = req.body.password;
  
   console.log(email);
   console.log(password);
    var user = db.get("users").find({ email: email }).value();
   console.log(user);
    if(!user){
        res.render('auth/login', {
            errors:[
                'User does not exist.'
            ],
            values: req.body
            
        });
        return;
    }
  
  var hashPassword = md5(password);
  console.log(hashPassword);
    if(user.password !== hashPassword){
        res.render('auth/login', {
            errors:[
                'Wrong Password.'
            ],

            values: req.body
            
        });
        return;
    }
    res.cookie('userId', user.id);
  
    if(!user.isAdmin){
      res.redirect('/users');
      return;
    }
    else{
      res.redirect('/transactions');
    }
    
}