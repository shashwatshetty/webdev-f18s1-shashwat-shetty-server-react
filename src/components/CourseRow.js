import React from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({course, index, updateCourse, deleteCourse, selectCourse}) =>
    <tr id={index}>
        <th scope="row">
            <button className="btn btn-link" onClick={() => selectCourse(course)}>
                {course.title}
            </button>
        </th>
        <td>me</td>
        <td>{(new Date()).toLocaleTimeString()}</td>
        <td>
            <button className="btn btn-danger"
                    onClick={() => deleteCourse(course)}>
                <i className="fa fa-trash"/>
            </button>
            &nbsp;&nbsp;
            <Link className="btn btn-primary"
                  to={`/${course.cId}/edit`}>
                <i className="fa fa-edit"/>
            </Link>
        </td>
    </tr>;

export default CourseRow