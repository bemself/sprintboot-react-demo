import React, {useState, useEffect} from 'react'
import CourseDataService from '../service/CourseDataService'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function CourseComponent (props){
    console.log("course component: ", props)
    const [id, setId] = useState(props.match.params.id)
    const [message, setMessage] = useState("")
    const [instructorName] =  useState("DEMO")
    const [description, setDescription] = useState("")
    const [course, setCourse] = useState({}) // todo


    useEffect (()=> {
        console.log("id:", id)
        if (id !== -1){
        CourseDataService.retrieveCourse(instructorName, id)
        .then(response=>{
        console.log("repsonse: ", response)
                setDescription(response.data.description)
        }
        )
    }}, [1]
    )

    function validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter at least 5 Characters in Description'
        }

        return errors

    }

    function onSubmit (){
        if (id === -1){
            CourseDataService.addCourse(course)
                .then(
                        response=> {
                            var id = response.data.id
                                    setMessage(`Addition of course ${id} Successful`);

                                console.log('update ' + id)
            })
        }
        else {
            CourseDataService.updateCourse(instructorName, id, course)
                    .then(
                        response=> {
                            setMessage(`Update of course ${id} Successful`);

                        console.log('update ' + id)
            }
    )
    }
    }

console.log(id, description)
    return(
    <>
            <h1>Course Details</h1>
            <div className="container">

                <Formik
                    initialValue={{id, description}}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={validate}
                    enableReinitialize={true}>
                  {
                  (props)=>(

                    <Form>
                        <ErrorMessage name="description" component="div" className="alert alert-warning:" />
                        <fieldset  className="form-group">
                            <label>Id</label>
                            <Field className="form-control" type="text" name="id"  disabled />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>Description</label>
                          <Field className="form-control" type="text" name="description" value={description}/>
                      </fieldset>
                      <button className="btn btn-success" type="submit">Save</button>
                      </Form>
                  )
                  }
                    </Formik>
            </div>
    </>
    )
    }

