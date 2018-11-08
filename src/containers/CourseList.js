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
            courses: [],
            selectedCourse: {},
            courseTitle: ''
        };
        CourseService.findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
            .then(this.render());
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
        CourseService.deleteCourse(courseToDelete.cId)
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
            .then(this.render())
    };

    updateCourse = (courseToUpdate) => {
        CourseService.updateCourse(this.state.selectedCourse.cId, courseToUpdate)
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
            .then(this.render())
    };

    selectCourse = course => {
        this.setState({
            selectedCourse: course
        })
    };

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
                                course={this.course}/>}/>

                    <div>
                        <div>
                            <Route exact path="/courses/table/"
                                   render={() =>
                                       <CourseTable
                                           courses={this.state.courses}
                                           title={this.state.courseTitle}
                                           selectedCourse={this.state.selectedCourse}
                                           addCourse={this.addCourse}
                                           selectCourse={this.selectCourse}
                                           updateCourse={this.updateCourse}
                                           deleteCourse={this.deleteCourse}/>}/>
                        </div>
                        <div>
                            <Route path="/courses/grid/"
                                   render={() =>
                                       <CourseGrid
                                           courses={this.state.courses}
                                           title={this.state.courseTitle}
                                           selectedCourse={this.state.selectedCourse}
                                           addCourse={this.addCourse}
                                           selectCourse={this.selectCourse}
                                           updateCourse={this.updateCourse}
                                           deleteCourse={this.deleteCourse}/>}/>
                        </div>
                    </div>
                </div>

            </Router>
        );
    }
}