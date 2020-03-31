'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
    static boot() {
        super.boot() //The boot function is called avery time that the model is instanced


        this.addHook('beforeSave', async(userInstance) => {
            //Hooks are binds that you can create avery time an actions is already made or is made
            if (userInstance.dirty.password) {
                userInstance.password = await Hash.make(userInstance.password)
            }
        })
    }

    /**
     * this method is used to hide filds on db queries
     */
    static get hidden() {
        return ['password']
    }

    static get traits() {
        return [
            '@provider:Adonis/Acl/HasRole',
            '@provider:Adonis/Acl/HasPermission'
        ]
    }

    /**
     * A relationship on tokens is required for auth to
     * work. Since features like `refreshTokens` or
     * `rememberToken` will be saved inside the
     * tokens table.
     *
     * @method tokens
     *
     * @return {Object}
     */
    tokens() {
        return this.hasMany('App/Models/Token')
    }


    image() {
        return this.belongsTo('App/Models/Image')
    }

    cupons() {
        return this.belongsToMany('App/Models/Cupon')
    }
}

module.exports = User