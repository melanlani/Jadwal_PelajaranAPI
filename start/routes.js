'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('/register', 'UserController.register')
  Route.post('/login', 'UserController.login')
}).prefix('api/v1')

Route.group(() => {
  Route.get('/', 'TeacherController.index')
  Route.post('/', 'TeacherController.store')
  Route.put('/:id', 'TeacherController.update')
  Route.delete('/:id', 'TeacherController.destroy')
}).prefix('api/v1/teachers')

Route.group(() => {
  Route.get('/', 'SubjectController.index')
  Route.post('/', 'SubjectController.store')
  Route.put('/:id', 'SubjectController.update')
  Route.delete('/:id', 'SubjectController.destroy')
}).prefix('api/v1/subjects')

Route.group(() => {
  Route.get('/', 'ScheduleController.index')
  Route.post('/', 'ScheduleController.store')
}).prefix('api/v1/schedules')
