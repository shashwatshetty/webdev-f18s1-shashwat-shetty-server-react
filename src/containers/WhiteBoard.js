import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseList from "./CourseList";

export default class CourseManager extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Route exact path="/courses"
                           render={() => <CourseList/>}/>
                </div>
            </Router>
        )
    }
}