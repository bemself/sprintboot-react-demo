import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import CourseDataService from '../service/CourseDataService'

export default function CourseComponent (props){
    const [course, setCourse] = useState({}) // todo
    const [id, setId] = useState(-1)
    const [description, setDescription] = useState("demo")
    const [message, setMessage] = useState("")
    const [instructorName] =  useState("DEMO")

    const formik = useFormik({
        initialValues:{
            id: parseInt(props.match.params.id),
            description: ''
        },
        onSubmit: values =>{
            console.log("values", JSON.stringify(values, null, 2))
            setCourse(values)
            var course = {
                id: values.id,
                description: values.description
            }
                    if (id === -1){
                        console.log("adding new course")
                        CourseDataService.addCourse(course)
                            .then(
                                    response=> {
                                        var id = response.data.id
                                                setMessage(`Addition of course ${id} Successful`);

                                            console.log('add ' + id)
                                            props.history.push('/courses')
                        })
                    }
                    else {
                        console.log("updating course")
                        CourseDataService.updateCourse(instructorName, id, course)
                                .then(
                                    response=> {
                                        setMessage(`Update of course ${id} Successful`);

                                    console.log('update ' + id)
                                    props.history.push('/courses')
                        }
                )
                }

        },
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="id"> ID </label>
            <input
                id="id"
                name="id"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.id}
                disabled
            />
            <label htmlFor="description"> Description </label>
            <input
                id="description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.description}
            />
            <button type="submit">Submit</button>
        </form>
    )
}