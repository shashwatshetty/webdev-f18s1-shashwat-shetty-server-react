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
        this.courseService = new CourseService();
        this.course = null
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }
    addCourse = newCourse => {
        this.courseService.createCourse(newCourse)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteCourse = courseToDelete => {
        this.courseService.deleteCourse(courseToDelete.id)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteModule = module =>{
        this.courseService.deleteModule(module)
        let newCourseList = this.courseService.findAllCourses()
        this.setState({
            courses: newCourseList
        })
    }

    updateCourse = course => {
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