'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuponOrderSchema extends Schema {
  up () {
    this.create('cupon_order', (table) => {
      table.increments()
      table.integer('order_id').unsigned()
      table.integer('cupon_id').unsigned()
      table.decimal('discount', 12,2).defaultTo(0.0)
      table.timestamps()
      
      table.foreign('order_id').references('id').inTable('order').onDelete('cascade')
      table.foreign('cupon_id').references('id').inTable('cupon').onDelete('cascade')
    })
  }

  down () {
    this.drop('cupon_order')
  }
}

module.exports = CuponOrderSchema
