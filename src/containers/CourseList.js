import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
// import CourseEditor from "./CourseEditor";
import CourseAdd from "../components/CourseAdd";
import "../../node_modules/font-awesome/css/font-awesome.min.css"

export default class CourseList extends Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.courseId = ''
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

    updateCourseId = courseId => {
        console.log(courseId)
        this.courseId = courseId
    }

    render() {
        return (
            <Router>
                <div>
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid row">
                            <div className="col-md-12 col-lg-3 form-group">
                                <div className="navbar-header">
                                    <h3 className="navbar-header">
                                        Course Manager
                                    </h3>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 form-group">
                                <div className="float-right">
                                    <Link to="/table" className="btn btn-primary ">
                                        Table
                                    </Link>
                                    <Link to="/grid" className="btn btn-primary">
                                        Grid
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                    <div>
                        <Route path="/table"
                               render={() =>
                                   <CourseTable
                                       courses={this.state.courses}
                                       deleteCourse={this.deleteCourse}
                                       addCourse={this.addCourse}
                                       updateCourseId={this.updateCourseId}/>}/>
                    </div>
                    <div>
                        <Route path="/grid"
                               render={() =>
                                   <CourseGrid
                                       courses={this.state.courses}
                                       deleteCourse={this.deleteCourse}
                                       addCourse={this.addCourse}
                                       updateCourseId={this.updateCourseId}/>}/>
                    </div>
                </div>
                </div>
            </Router>
        );
    }
}