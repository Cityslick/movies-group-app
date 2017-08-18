const passport = require("passport");
const User  = require("../../models/user");

module.exports = function(){
    passport.serializeUser(function(user,done){
        done(null,user.username);
    })

    passport.deserializeUser(function(username,done){
        User.findByUserName(username)
        .then(user => {
        done(null, user);
        }).catch(err => {
            done(err, null);
        });
    });

}
