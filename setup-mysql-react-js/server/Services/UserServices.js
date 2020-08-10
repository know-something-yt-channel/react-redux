const db = require("../models/index");
const User = db.users;
//const Op = db.Sequelize.Op;

module.exports = function(app){
  app.post('/api/adduser', (req,res)=>{
    console.log("request ", req.body);

    const userInfo = {
      username : req.body.username,
      email : req.body.email,
      password: req.body.password
    }

    User.create(userInfo)
      .then(data => {
          res.send(data);
      })
      .catch ( err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the record."
          });
      });

  });
}
 