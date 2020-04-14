import React, {useState} from 'react'
import ListCourseComponent from './ListCourseComponent'
import CourseComponent from './CourseComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function InstructorApp (){
        return (
        <Router>
        <div>
            <h1> Instructor Application </h1>
            <Switch>
                <Route path="/" exact component={ListCourseComponent}/>
                <Route path="/courses" exact component={ListCourseComponent}/>
                <Route path="/courses/:id" component={CourseComponent}/>

            </Switch>
        </div>

        </Router>
        )
    }

export default InstructorApp