'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeacherSchema extends Schema {
  up () {
    this.create('teachers', (table) => {
      table.increments()
      table.string('teacher_name', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('teachers')
  }
}

module.exports = TeacherSchema
