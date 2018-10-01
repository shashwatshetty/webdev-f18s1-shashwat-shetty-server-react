import React, {Component} from 'react'
import ModuleList from "../components/ModuleList";
import CourseService from "../services/CourseService";
import WidgetList from "../components/WidgetList";

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.course = this.props.course
        this.state = {
            courses: this.courseService.findAllCourses(),
            modules: this.courseService.findAllModules(this.course)
        }
    }

    addModule = moduleToAdd => {
        let moduleList = this.state.modules
        moduleList.push(moduleToAdd)
        this.setState({
            modules: moduleList
        })
        console.log(this.state.modules.length)
    }

    deleteModule = moduleToDelete =>{
        let moduleList = this.state.modules
        moduleList.splice(moduleList.indexOf(moduleToDelete), 1)
        this.setState({
            modules: moduleList
        })
        console.log(this.state.modules.length)
    }


    render(){
        return (
            <div className="container-fluid">
                <h1>Course Editor</h1>
                <div className="row">
                    <ModuleList
                        addModule={this.addModule}
                        deleteModule={this.deleteModule}
                        modules={this.state.modules}/>
                    <WidgetList/>
                </div>
            </div>
        )
    }
}