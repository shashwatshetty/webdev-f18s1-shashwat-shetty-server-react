import React, {Component} from 'react'
import ModuleListItem from "./ModuleListItem";
import ModuleAdd from "./ModuleAdd";

export default class ModuleList extends Component{
    constructor(props) {
        super(props);
        this.modules = this.props.modules
        this.updateForm = this.props.updateForm
        this.addModule = this.props.addModule
        this.deleteModule = this.props.deleteModule
        this.editModule = this.props.editModule
        this.updateModule = this.props.updateModule
    }

    render(){
        return(
            <div className="col-3">
                <ModuleAdd
                    updateForm={this.updateForm}
                    updateModule={this.updateModule}
                    addModule={this.addModule}/>
                <ul className="nav flex-column nav-pills">
                    {
                        this.modules.map((module, key) =>
                            <ModuleListItem module={module}
                                            updateFormText={this.updateFormText}
                                            deleteModule={this.deleteModule}
                                            editModule={this.editModule}
                                            key={key}/>
                        )}
                </ul>
            </div>
        )
    }

}