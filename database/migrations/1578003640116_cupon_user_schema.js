'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuponUserSchema extends Schema {
    up() {
        this.create('cupon_users', (table) => {
            table.increments()
            table.integer('coupon_id').unsigned()
            table.integer('user_id').unsigned()
            table.timestamps()

            table.foreign('order_id').references('id').inTable('order').onDelete('cascade')
            table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
        })
    }

    down() {
        this.drop('cupon_users')
    }
}

module.exports = CuponUserSchema