'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Discount extends Model {
    static get table() {
        return 'cupon_order'
    }

    order() {
        return this.belongsTo('App/Models/Order', 'order_id', 'id') 
                              //model, campo nessa tabela, campo que ta relacionado na outra model
    }

    cupon() {
        return this.belongsTo('App/Models/Cupon', 'cupon_id', 'id')
    }
}

module.exports = Discount
