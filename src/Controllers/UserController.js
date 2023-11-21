const User = require('../Models/User')
const jwt = require('jsonwebtoken')
const secret = 'mniznr'
const bcrypt = require('bcrypt')
class UserController{
    async login(req,res){
        var {email,pass} = req.body
        var user = await User.findByEmail(email)
        if(user.length > 0){
            var comparePass = await bcrypt.compare(pass,user[0].pass)
            if(comparePass){
                var token = jwt.sign({
                    id:user[0].id,
                    username:user[0].username,
                    email:user[0].email,
                    },secret,{expiresIn:'7d'})
                res.status(200).json({token})
            }else{
                res.status(401).json({msg:'password incorrect'})
            }
           
        }else{
            res.status(404).json({msg:'Email Not Found'})
        }     
     }
    async register(req,res){
        var {
            username,
            email,
            pass,
            key_pix,
            points
        }
         = req.body
         var hash = await bcrypt.hash(pass,10)
         try{
         var result = await User.findByEmail(email)
         
         if(result.length == 0){
            await User.createUser({
                username,
                email,
                pass:hash,
                points,
                key_pix,
              })
              res.status(200).json({msg:"Ok"})
         }else{
            res.status(401).json({msg:"Esse email Ja foi Usado"})
         }
         
         }catch(erro){
            console.log(erro)
            res.status(500)
         }
    }
}
module.exports = new UserController