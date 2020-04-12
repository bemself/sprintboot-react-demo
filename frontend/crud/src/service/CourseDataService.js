import axios from 'axios'

const INSTRUCTOR = "DEMO"
const COURSE_API_URL = "http://localhost:8080"
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}/courses`

    console.log(INSTRUCTOR_API_URL)
    console.log(INSTRUCTOR_API_URL)
export default function CourseDataService (){

    function retrieveAllCourses(name){
        return axios.get(
            `${INSTRUCTOR_API_URL}`
        )
    }
}