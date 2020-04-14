import axios from 'axios'
import {Component} from 'react'

const INSTRUCTOR = "DEMO"
const COURSE_API_URL = "http://localhost:8080"
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}/courses`

console.log(INSTRUCTOR_API_URL)

 class CourseDataService {

  retrieveCourses(name) {
        return axios.get(
            `${INSTRUCTOR_API_URL}`
        )
        }

  deleteCourse  (id)  {
    return axios.delete(
        `${INSTRUCTOR_API_URL}/${id}`
    )
}

  updateCourse(name, id, course){
    console.log("update id: ", id)
    return axios.put(
        `${INSTRUCTOR_API_URL}/${id}`, course
    )
}

  retrieveCourse(name, id){
    console.log("retrieve course id: ", id)
    return axios.get(
        `${INSTRUCTOR_API_URL}/${id}`
    )
}

  addCourse(course){
    return axios.post(
        `${INSTRUCTOR_API_URL}`, course
    )
}

}

export default new CourseDataService()