const Withdraw = require('../Models/Withdraw')
class WithdrawController{
    async viewWithdraw(req,res){
        var id = req.userToken.id
        try {
            var withdraw = await Withdraw.viewWithdraw(id)
            res.status(200).json({withdraw})
        } catch (error) {
            console.log(error)
        }
      

    }
}
module.exports = new WithdrawController