import React, {useState, useEffect} from 'react'
import axios from 'axios'
//import retrieveAllCourses from '../service/CourseDataService'

const INSTRUCTOR = "DEMO"
const COURSE_API_URL = "http://localhost:8080"
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}/courses`

function retrieveAllCourses(name){
        return axios.get(
            `${INSTRUCTOR_API_URL}`
        )
        }

export default function ListCoursesComponent (props){
    const [courses, setCourses] = useState("[]")
    const [mesage, setMessage] = useState("")
    // this useEffect is not fired...
    useEffect (()=> {
        retrieveAllCourses(INSTRUCTOR)// thus this returns error "Object doesn't support property or method 'map'"
        .then(
          response=> {
              console.log(response)
              setCourses(response.data)
          }
        )}, []
        )


    return (

    <div className="container">
                    <h3>All Courses</h3>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                courses.map(course=>
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>{course.description}</td>

                                </tr>
                                )
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
   )

}