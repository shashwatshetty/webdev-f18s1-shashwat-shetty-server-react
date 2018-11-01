import React, {Component} from 'react'
import CourseRow from "../components/CourseRow";
import CourseAdd from "../components/CourseAdd";

export default class CourseTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: props.courses,
            selectedCourse: props.selectedCourse,
            courseTitle: props.title
        };
        this.addCourse = this.props.addCourse;
        this.selectCourse = this.props.selectCourse;
        this.updateCourse = this.props.updateCourse;
        this.deleteCourse = this.props.deleteCourse;
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            courses: newProps.courses,
            selectedCourse: newProps.selectedCourse,
            courseTitle: newProps.title
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <CourseAdd title={this.state.courseTitle}
                               selectedCourse={this.state.selectedCourse}
                               updateCourse={this.updateCourse}
                               addCourse={this.addCourse}/>
                    <tr>
                        <th scope="col">Course Title</th>
                        <th scope="col">Owned By</th>
                        <th scope="col">Last Modified</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.courses.map((course, key) =>
                        <CourseRow course={course}
                                   key={key}
                                   updateCourse={this.updateCourse}
                                   deleteCourse={this.deleteCourse}
                                   selectCourse={this.selectCourse}/>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}