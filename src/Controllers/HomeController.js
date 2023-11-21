class HomeController{
    async index(req,res){
        res.send('oi controller')
        res.status(200)
    }
}
module.exports = new HomeController