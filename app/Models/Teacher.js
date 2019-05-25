'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Teacher extends Model {

  subject () {
    return this.hasMany('App/Models/Subject', 'teacher_id')
  }
  
}

module.exports = Teacher
