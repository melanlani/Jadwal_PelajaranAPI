'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {
  subjects () {
  return this
    .belongsToMany('App/Models/Subject')
    .pivotTable('schedule_subjects')
  }
}

module.exports = Schedule
