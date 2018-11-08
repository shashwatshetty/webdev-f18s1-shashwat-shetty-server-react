import React, {Component} from 'react'
import ModuleListItem from "./ModuleListItem";
import ModuleAdd from "./ModuleAdd";

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.updateForm = props.updateForm;
        this.updateModule = props.updateModule;
        this.addModule = props.addModule;
        this.selectModule = props.selectModule;
        this.deleteModule = props.deleteModule;
        this.state = {
            course: props.course,
            modules: props.modules
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            course: newProps.course,
            modules: newProps.modules
        })
    }


    render() {
        return(
            <div>
                <ModuleAdd
                    updateForm={this.updateForm}
                    updateModule={this.updateModule}
                    addModule={this.addModule}/>
                <ul className="nav flex-column nav-pills">
                    {
                        this.state.modules.map((module, key) =>
                            <ModuleListItem
                                key={key}
                                course={this.state.course}
                                module={module}
                                selectModule={this.selectModule}
                                deleteModule={this.deleteModule}/>
                        )}
                </ul>
            </div>
        )
    }
}