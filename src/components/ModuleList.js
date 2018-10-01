import React, {Component} from 'react'
import ModuleListItem from "./ModuleListItem";
import ModuleAdd from "./ModuleAdd";

export default class ModuleList extends Component{
    constructor(props) {
        super(props);
        this.modules = this.props.modules
        this.addModule = this.props.addModule
        this.deleteModule = this.props.deleteModule
    }

    render(){
        return(
            <div className="col-3">
                <ModuleAdd
                    addModule={this.addModule}/>
                <ul className="nav flex-column nav-pills">
                    {
                        this.modules.map((module, key) =>
                            <ModuleListItem module={module}
                                            deleteModule={this.deleteModule}
                                            key={key}/>
                        )}
                </ul>


            </div>
        )
    }

}