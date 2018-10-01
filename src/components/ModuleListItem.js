import React from 'react'

const ModuleListItem = ({module, deleteModule,  index}) =>
    <div id={index} className="nav-link active form-group">
        {module.title}
        <button type="button"
                onClick={() => deleteModule(module)}
                className="close"
                data-dismiss="alert"
                aria-label="Close">
                        <span aria-hidden="true">
                            &times;
                        </span>
        </button>
    </div>

export default ModuleListItem