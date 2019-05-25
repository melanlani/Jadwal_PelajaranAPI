'use strict'

const Schedule = use('App/Models/Schedule')
const Database = use("Database");

class ScheduleController {

  async index ({ request, response, view }) {

    try {
      const schedules = await Schedule.query()
                                    .with('subjects')
                                    .fetch()
      return response.status(200).send({result: schedules})
    }
    catch (e) {
      console.log(e);
      return response.status(400).send({'message':'Something went wrong!'})
    }

  }


  async store ({ request, response, auth }) {
    try {
      const day = request.input("day")
      const subjects = request.input("subjects")

      const check = await Schedule.query()
          .where('day', day)
          .getCount()
      if (check > 0){
        console.log('Schedule Already Exists');
        return response.status(400).json({
          message: 'Schedule Already Exists'
        })
      }

      const schedule = await Schedule.create({ day })

      if (subjects && subjects.length > 0) {
        await schedule.subjects().attach(subjects)
        schedule.subjects = await schedule.subjects().fetch()
      }
      console.log(schedule);
      return response.status(200).send({'message': 'Add Data Success', result: schedule})
    }
    catch (e) {
      console.log(e);
      return response.status(400).send({'message':'Something went wrong!'})
    }
  }


}

module.exports = ScheduleController
