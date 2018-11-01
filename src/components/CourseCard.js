import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, index, deleteCourse, selectCourse}) =>
    <div id={index} className="card" styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h3 className="card-title justify-content-center">
                <button className="btn btn-link"
                        onClick={() => selectCourse(course)}>
                    {course.title}
                </button>
            </h3>
            <div className="row">
                <div className="col-12">
                    <h7>Modified {(new Date).toLocaleTimeString()}</h7>
                </div>
                <div className="form-group col-12 justify-content-between">
                    <div>
                        <button className="btn btn-danger float-right"
                                onClick={() => deleteCourse(course)}>
                            <i className="fa fa-trash"/>
                        </button>
                    </div>
                    <div>
                        <Link className="btn btn-primary"
                              to={`/${course.id}/edit`}>
                            <i className="fa fa-edit"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default CourseCard