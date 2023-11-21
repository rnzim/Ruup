const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    const auth = req.headers['authorization']
    const secret = 'mniznr'
    if(auth != undefined){
        var bearer = auth.split(" ")
        var token = bearer[1]
        try{
            var isvalid = jwt.verify(token,secret)
            if(Object.keys(isvalid).length > 0){
                    req.userToken = isvalid
                    next()               
            }else{
                res.status(400).json({msg:"Token Desconecido"})
            }
           
        }catch(error){
            res.status(403).json({msg:"Token Invalido"})
        }
        

    }else{
        res.status(403).json({msg:"Token Vazio"})

    }
}