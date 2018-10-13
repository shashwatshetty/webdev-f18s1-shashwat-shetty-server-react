import React from 'react'

const ModuleListItem = ({index, course, module, selectModule, deleteModule}) =>
    <a id={index}
       onClick={() => selectModule(module)}
       className="btn btn-primary nav-link form-group">
        {module.title}
        <div className="row float-right">
            <a onClick={() => deleteModule(module)}
               className="col">
                <i className="fa fa-window-close"/>
            </a>
        </div>
    </a>;

export default ModuleListItem