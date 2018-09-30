import React, {Component} from 'react'
import CourseRow from "../components/CourseRow";
import CourseAdd from "../components/CourseAdd";

const CourseTable = ({courses, deleteCourse, addCourse}) =>
    <div>
        <CourseAdd
            addCourse={addCourse}/>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Course Title</th>
                    <th scope="col">Owned By</th>
                    <th scope="col">Last Modified</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { courses.map((course, key) =>
                    <CourseRow course={course}
                               key={key}
                               deleteCourse={deleteCourse}/>
                )}
            </tbody>
        </table>
    </div>

export default CourseTable
