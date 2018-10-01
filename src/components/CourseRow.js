import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const CourseRow = ({course, index, deleteCourse, updateCourseId}) =>
    <tr id={index}>
        <th scope="row">{course.title}</th>
        <td>me</td>
        <td>{(new Date()).toLocaleTimeString()}</td>
        <td>
            <div className="row">
                <div className="col">
                    <button className="btn btn-danger"
                            onClick={() => deleteCourse(course)}>
                        <span aria-hidden={"true"}>
                                    &times;
                        </span>
                    </button>
                </div>
                <div className="col">
                    <Link className="btn btn-primary"
                          onClick={updateCourseId(course.id)}
                          to={`/${course.id}/edit`}>
                        Edit
                    </Link>
                </div>
            </div>
        </td>
    </tr>

export default CourseRow