import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const ModuleListItem = ({course, module, setLessons, deleteModule, editModule,  index}) =>
    <Link id={index}
          to={`/${course.id}/edit/${module.id}`}
          onClick={() => setLessons(module)}
          className="btn btn-primary nav-link form-group">
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
    </Link>

export default ModuleListItem