'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subject extends Model {

  teacher () {
    return this.belongsTo('App/Models/Teacher','teacher_id')
  }

  schedules () {
  return this
              .belongsToMany('App/Models/Schedule')
              .pivotTable('schedule_subjects')
  }
}

module.exports = Subject
