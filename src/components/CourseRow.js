import React from 'react'

const CourseRow = ({course, index, deleteCourse}) =>
    <tr id={index}>
        <th scope="row">{course.title}</th>
        <td>me</td>
        <td>{(new Date()).toLocaleTimeString()}</td>
        <td>
            <button className="btn btn-danger"
                    onClick={() => deleteCourse(course)}>
                <span aria-hidden={"true"}>
                            &times;
                </span>
            </button>
        </td>
    </tr>

export default CourseRow