'use strict'

const Teacher = use('App/Models/Teacher')

class TeacherController {

  async index ({ request, response, view }) {
    try {
      const teachers = await Teacher.all()

      return response.status(200).send({result: teachers})
    }
    catch (e) {
      console.log(e);
      return response.status(400).send({'message':'Something went wrong!'})
    }
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    try {
      const teacher = await Teacher.create(request.all())

      return response.status(200).send({message: 'Success to add Data Teacher',result: teacher})
    }
    catch (e) {
      console.log(e);
      return response.status(400).send({'message':'Something went wrong!'})
    }
  }

  async update ({params, request, response}) {
    const teacherInfo = request.only(['teacher_name'])
    const teacher = await Teacher.find(params.id)
    if (!teacher) {
      return response.status(404).send({result: 'Resource not found'})
    }
    teacher.teacher_name = teacherInfo.teacher_name
    await teacher.save()
    return response.status(200).send({message: 'Success to update Data Teacher',result:teacher})
  }

  async destroy ({params, response}) {
    const teacher = await Teacher.find(params.id)
    if (!teacher) {
    return response.status(404).send({result: 'Resource not found'})
    }
    await teacher.delete()
    return response.status(204).send({message:'Data Success Deleted'})
  }

}

module.exports = TeacherController
