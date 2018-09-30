import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import CourseEditor from "./CourseEditor";

export default class WhiteBoard extends Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
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

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <h1>Course Manager</h1>
                        <Link to="/course/table">
                            <button className="btn btn-primary">
                                Table
                            </button>
                        </Link>
                        <Link to="/course/grid">
                            <button className="btn btn-primary">
                                Grid
                            </button>
                        </Link>
                        <Route path="/course/table"
                               render={() =>
                                   <CourseTable
                                       courses={this.state.courses}
                                       deleteCourse={this.deleteCourse}
                                       addCourse={this.addCourse}/>}/>

                        <Route path="/course/grid"
                               render={() =>
                                   <CourseGrid/>}/>
                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor
                                    {...props}
                                    deleteModule={this.deleteModule}
                                    courses={this.state.courses}/>}
                            path="/course/:courseId/edit"/>
                    </div>
                </Router>
            </div>
        );
    }
}