'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuponUserSchema extends Schema {
  up () {
    this.create('cupon_users', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cupon_users')
  }
}

module.exports = CuponUserSchema
