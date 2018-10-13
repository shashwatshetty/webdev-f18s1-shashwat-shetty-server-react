import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleList from "../components/ModuleList";
import WidgetList from "../components/WidgetList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        const course = this.props.course;
        let selectedModule = {};
        let selectedLesson = {};
        let selectedTopic = {};
        if(course.modules){
            selectedModule = course.modules[0]
        }
        if(selectedModule && selectedModule.lessons){
            selectedLesson = selectedModule.lessons[0]
        }
        if(selectedLesson && selectedLesson.topics){
            selectedTopic = selectedLesson.topics[0]
        }
        this.state = {
            course: course,
            currentModule: selectedModule,
            currentLesson: selectedLesson,
            currentTopic: selectedTopic,
            moduleTitle: '',
            modules: course.modules,
            lessons: []
        }
    }

    updateForm = event =>
        this.setState({
            title: event.target.value
        });

    addModule = () => {
        let id = (new Date()).getTime();
        let moduleToAdd = {
            id: id,
            title: this.state.moduleTitle === "" ? "New Module" : this.state.moduleTitle
        }
        let moduleList = this.state.modules;
        moduleList.push(moduleToAdd);
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
            if(module === this.state.module){
                module.title = this.state.moduleTitle
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
                                        {this.state.course.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <ModuleList
                                course={this.state.course}
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
                                               course={this.state.course}
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