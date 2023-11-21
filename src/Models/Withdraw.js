const knex = require('../Database/database')
class WithDraw{
    async findWithdraw(id){
        var withdraw = await knex.select().where({id:id}).table('withdraw')
        return withdraw
    }
    async updateWithdrawToPaid(id){
        var withdraw = await knex.update({status_paid:'Pagamento Realizado'}).where({id:id}).table('withdraw')
        return withdraw
    }
    async updateWithdrawToRefused(id){
        var withdraw = await knex.update({status_paid:'Pagamento Recusado'}).where({id:id}).table('withdraw')
        return withdraw
    }
    async viewWithdraw(id){
        var withdraw = await knex.select(
            'withdraw.id',
            'users.username',
            'users.key_pix',
            'withdraw.status_paid',
            'rewards.reward_name',
            'rewards.reward_value'
        )
        .from('withdraw')
        .join('users', 'users.id', '=', 'withdraw.id_user')
        .join('rewards', 'rewards.id', '=', 'withdraw.id_reward')
        .where('withdraw.id_user',id)
        return withdraw
    }
    async addWithdraw(WithDraw){
        var withdraw = await knex.insert(WithDraw).table('withdraw')
        return withdraw
    }
}
module.exports = new WithDraw