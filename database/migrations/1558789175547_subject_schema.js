'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubjectSchema extends Schema {
  up () {
    this.create('subjects', (table) => {
      table.increments()
      table.integer('teacher_id').unsigned()
      table
          .foreign('teacher_id')
          .references('teachers.id')
          .onDelete('cascade')
          .onUpdate('cascade')
      table.string('subject_name', 200).notNullable()
      table.time('schedule_start')
      table.time('schedule_end')
      table.timestamps()
    })
  }

  down () {
    this.drop('subjects')
  }
}

module.exports = SubjectSchema
