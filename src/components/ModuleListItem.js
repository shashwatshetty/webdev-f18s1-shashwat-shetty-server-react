import React from 'react'

const ModuleListItem = ({module, deleteModule, editModule,  index}) =>
    <button id={index} className="btn btn-primary nav-link form-group">
        {module.title}
        <div className="row justify-content-between float-right">
            <button onClick={() => editModule(module)}
                    className="btn btn-primary col">
                <i className="fa fa-edit"></i>
            </button>
            <button onClick={() => deleteModule(module)}
                    className="col btn btn-primary">
                <i className="fa fa-window-close"></i>
            </button>
        </div>
    </button>

export default ModuleListItem