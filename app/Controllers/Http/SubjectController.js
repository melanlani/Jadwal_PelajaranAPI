'use strict'

const Subject = use('App/Models/Subject')

class SubjectController {

  async index ({ request, response, view }) {
    try {
      const subjects = await Subject.query()
                                    .with('teacher')
                                    .with('schedules')
                                    .fetch()
      return response.status(200).send({result: subjects})
    }
    catch (e) {
      console.log(e);
      return response.status(400).send({'message':'Something went wrong!'})
    }
  }

  async store ({ request, response }) {
    try {
      const subject_name = request.input("subject_name")
      const teacher_id = request.input("teacher_id")
      const schedule_start = request.input("schedule_start")
      const schedule_end = request.input("schedule_end")

      const subject = await Subject.create({ subject_name, teacher_id, schedule_start, schedule_end })

      return response.status(200).send({message: 'Success to add Data Subject',result: subject})
    }
    catch (e) {
      console.log(e);
      return response.status(400).send({'message':'Something went wrong!'})
    }
  }

  async update ({params, request, response}) {
    const subjectInfo = request.only(['subject_name', 'teacher_id', 'schedule_start', 'schedule_end'])
    const subject = await Subject.find(params.id)
    if (!subject) {
      return response.status(404).send({result: 'Resource not found'})
    }
    subject.subject_name = subjectInfo.subject_name
    subject.teacher_id = subjectInfo.teacher_id
    subject.schedule_start = subjectInfo.schedule_start
    subject.schedule_end = subjectInfo.schedule_end
    await subject.save()
    return response.status(200).send({message: 'Success to update Data Subject',result:subject})
  }

  async destroy ({params, response}) {
    const subject = await Subject.find(params.id)
    if (!subject) {
    return response.status(404).send({result: 'Resource not found'})
    }
    await subject.delete()
    return response.status(204).send({message:'Data Success Deleted'})
  }

}

module.exports = SubjectController
