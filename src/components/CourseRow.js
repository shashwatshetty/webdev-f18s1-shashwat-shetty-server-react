import React from 'react'
import {Link} from "react-router-dom";

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
                    <Link className="btn btn-primary" to={`/course/${course.id}/edit`} onClick={() => updateCourseId(course.id)}>
                        Edit
                    </Link>
                </div>
            </div>
        </td>
    </tr>

export default CourseRow