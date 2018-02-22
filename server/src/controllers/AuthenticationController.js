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
    }
}