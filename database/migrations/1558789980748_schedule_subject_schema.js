'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleSubjectSchema extends Schema {
  up () {
    this.create('schedule_subjects', (table) => {
      table.increments()
      table
          .integer('schedule_id')
          .unsigned()
          .references('id')
          .inTable('schedules')
          .onDelete('SET NULL')
          .onUpdate('NO ACTION')
      table
          .integer('subject_id')
          .unsigned()
          .references('id')
          .inTable('subjects')
          .onDelete('SET NULL')
          .onUpdate('NO ACTION')
      table.timestamps()
    })
  }

  down () {
    this.drop('schedule_subjects')
  }
}

module.exports = ScheduleSubjectSchema
