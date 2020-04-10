'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
    /**
     * Relacionamento entre a categoria e a imagem de destaque
     */
    image() {
        return this.belongsTo('App/Models/Image')
    }

    /**
     * Relacionamento entre categoria e produto
     */
    products() {
        return this.belongsToMany('App/Models/Product')
    }
}

module.exports = Category
