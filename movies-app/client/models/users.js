const db = require("../db/config");
const User ={
    findByUserName= function(name){
        return db.query(
            `SELECT * FROM  users WHERE  username=$1`,[name]
        );
    }

    create= function(user){
        return db.one(
            `INSERT INTO users VALUEs(default, $1, $2, $3 $4, $5)`,
            [user.username,user.email, user.password_digest,user.firstname, user.lastname]

        );
    }

};


module.exports= User;
