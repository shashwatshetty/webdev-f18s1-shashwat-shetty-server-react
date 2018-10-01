import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, index, deleteCourse, updateCourse}) =>
    <div id={index} className="card" styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h3 className="card-title">{course.title}</h3>
            <div className="row">
                <div className="col justify-content-center">
                    <h7>Modified {(new Date).toLocaleTimeString()}</h7>
                </div>
                <div className="form-group">
                    <button className="btn btn-danger float-right"
                            onClick={() => deleteCourse(course)}>
                        Remove
                    </button>
                </div>
                <div className="form-group">
                    <Link className="btn btn-primary"
                          onClick={updateCourse(course)}
                          to={`/${course.id}/edit`}>
                        Edit
                    </Link>
                </div>
            </div>
        </div>
    </div>

export default CourseCard