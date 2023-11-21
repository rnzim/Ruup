const knex = require('../Database/database')
class User{
    
    async findByid(id){
       try {
         var result = await knex.select().where({id:id}).table("users")
         return result
       } catch (error) {
         throw error
       }
    }
    async findByEmail(email){
        try {
            var result = await knex.select().where({email:email}).table("users")
            return result
          } catch (error) {
            throw error
          }
    }
    async createUser(user){
        try{
            var result = await knex.insert(user).table('users')
        }catch(error){
            throw error
        }
       
    }
    async deleteUser(user){

    }
    async viewAllUser(){
        try{
          var result = await knex.select().table('users')
          return result
      }catch(error){
          throw error
      }
    }
}

module.exports = new User