import React, {Component} from 'react'
import CourseRow from "../components/CourseRow";
import CourseAdd from "../components/CourseAdd";

export default class CourseTable extends Component {
    constructor(props) {
        super(props);
        this.addCourse = this.props.addCourse
    }

    render(){
        return (
            <div>
                <table className="table">
                    <thead>
                        <CourseAdd
                            addCourse={this.addCourse}/>
                        <tr>
                            <th scope="col">Course Title</th>
                            <th scope="col">Owned By</th>
                            <th scope="col">Last Modified</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.courses.map((course, key) =>
                            <CourseRow course={course}
                                       key={key}
                                       deleteCourse={this.props.deleteCourse}
                                       updateCourseId={this.props.updateCourseId}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}