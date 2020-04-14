import React, {useState, useEffect} from 'react'
import CourseDataService from '../service/CourseDataService'


export default function ListCoursesComponent (props){
    const [courses, setCourses] = useState([{"id":2,"username":"demo","description":"learn js"},{"id":3,"username":"demo","description":"learn react"}])
    const [instructorName] =  useState("DEMO")
    const [message, setMessage] = useState("")

    useEffect (()=> {
        CourseDataService.retrieveCourses(instructorName)
        .then(
          response=> {
              console.log(response)
              setCourses(response.data)
          }
        )
        }, [1] //[courses]
        )


    function deleteCourseClicked(id){
        CourseDataService.deleteCourse(id)
        .then(
            response=> {
                setMessage(`Delete of course ${id} Successful`);

            }
        )
    }

    function updateCourseClicked(name, id, course){
        console.log('update ' + id)
        props.history.push(`/courses/${id}`) // this is for later use in CourseComponent where id is retrieved from the path param

        console.log("props updated:", props)
        }

    function addCourseClicked(course){
        props.history.push(`/courses/-1`)
    }


    return (

    <div className="container">
    <h3>All Courses</h3>

       {message && <div class="alert alert-success">{message}</div>}

                    <div className="container">
                    <div className="row">
                        <button className="btn btn-success" onClick={()=>addCourseClicked()}>Add</button>
                    </div>
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
                                    <td><button className="btn btn-warning" onClick={()=>updateCourseClicked(instructorName, course.id, course)}>
                                         Update
                                         </button>
                                     </td>
                                    <td><button className="btn btn-warning" onClick={()=>deleteCourseClicked(course.id)}>
                                        Delete
                                        </button>
                                    </td>
                                </tr>
                                )
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
   )

}