const {User} = require('../models')

module.exports = {
   register (req, res) {
        try {
            const user = User.create(req.body).then((user) =>{
                res.send(user.toJSON())
            }).catch((err) => {
                res.status(400).send({
                    error: 'This email account is already in used.'
                })
            })
            
        } catch (err) {
            console.log('Error on Try to Post')
        }
    },
    login (req, res) {
      const {email, password} = req.body
      const user = User.findOne({
        where: {
          email: email
        }
      }).then((user) => {
        if (!user) {
            return res.status(403).send({
              error: 'The login information was incorrect.'
            })
          }
          const isPasswordValid = password === user.password
          if (!isPasswordValid) {
            return res.status(403).send({
              error: 'The login information was incorrect.'
            })
          }

          const userJson = user.toJSON()

          return res.send({
              user: userJson
          })
      }).catch((err) => {
          return res.status(500).send({
              error: 'An Error has occured trying to login.'
          })
      })
    }
}