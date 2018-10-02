import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleList from "../components/ModuleList";
import CourseService from "../services/CourseService";
import WidgetList from "../components/WidgetList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.course = this.props.course
        this.selectedModule = {}
        this.state = {
            title: '',
            module: {},
            courses: this.courseService.findAllCourses(),
            modules: this.courseService.findAllModules(this.course),
            lessons: []
        }
    }

    updateForm = event =>
        this.setState({
            title: event.target.value
        })

    addModule = () => {
        let id = (new Date()).getTime()
        let moduleToAdd = {id: id, title: this.state.title === "" ? "New Module" : this.state.title}
        let moduleList = this.state.modules
        moduleList.push(moduleToAdd)
        this.setState({
            modules: moduleList
        });
        console.log(this.state.modules.length)
    }

    deleteModule = moduleToDelete => {
        let moduleList = this.state.modules
        moduleList.splice(moduleList.indexOf(moduleToDelete), 1)
        this.setState({
            modules: moduleList
        });
        console.log(this.state.modules.length)
    }

    editModule = moduleToEdit => {
        this.setState({
            module: moduleToEdit
        })
    }

    updateModule = () => {
        let moduleList = this.state.modules
        moduleList.map(module => {
            if(module === this.selectedModule){
                module.title = this.state.title
            }
        });
        this.setState({
            modules: moduleList
        });
    }

    setLessons = moduleSelected => {
        this.setState({
            lessons: moduleSelected.lessons
        });
        console.log(this.state.lessons)
    }

    render(){
        return (
            <Router>
                <div className="container-fluid">
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid row">
                            <div className="col-3">
                                <div className="navbar-header">
                                    <h3 className="navbar-header">
                                        {this.course.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <ModuleList
                                course={this.course}
                                updateForm={this.updateForm}
                                setLessons={this.setLessons}
                                addModule={this.addModule}
                                deleteModule={this.deleteModule}
                                editModule={this.editModule}
                                updateModule={this.updateModule}
                                modules={this.state.modules}/>
                            <div className="col-9">
                                <Route exact path="/:courseId/edit/:moduleId"
                                       render={() =>
                                           <LessonTabs
                                               state={this.state}
                                               course={this.course}
                                               module={this.selectedModule}
                                               lessons={this.state.lessons}/>}/>
                                <TopicPills/>
                                <WidgetList/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}