import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import "../../node_modules/font-awesome/css/font-awesome.min.css"
import CourseListNav from "../components/CourseListNav";
import CourseEditor from "./CourseEditor";

export default class CourseList extends Component {

    constructor(props) {
        super(props);
        this.course = null;
        this.state = {
            courses: {}
        };
        CourseService.findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
            .then(this.render())
    }

    addCourse = newCourse => {
        CourseService.createCourse(newCourse)
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
            .then(this.render())
    };

    deleteCourse = courseToDelete => {
        CourseService.deleteCourse(courseToDelete.id)
        this.setState({
            courses: CourseService.findAllCourses()
        })
    }

    updateCourse = course => {
        console.log(course.id)
        this.course = course
    }

    render() {
        return (
            <Router>
                <div>
                    <Route
                        path="/courses/"
                        render={() => <CourseListNav/>}/>

                    <Route
                        exact path="/:courseId/edit"
                        render={(props) =>
                            <CourseEditor
                                {...props}
                                course={this.course}
                                courses={this.state.courses}/>}/>

                    <div>
                        <div>
                            <Route path="/courses/table/"
                                   render={() =>
                                       <CourseTable
                                           courses={this.state.courses}
                                           deleteCourse={this.deleteCourse}
                                           addCourse={this.addCourse}
                                           updateCourse={this.updateCourse}/>}/>
                        </div>
                        <div>
                            <Route path="/courses/grid/"
                                   render={() =>
                                       <CourseGrid
                                           courses={this.state.courses}
                                           deleteCourse={this.deleteCourse}
                                           addCourse={this.addCourse}
                                           updateCourse={this.updateCourse}/>}/>
                        </div>
                    </div>
                </div>

            </Router>
        );
    }
}