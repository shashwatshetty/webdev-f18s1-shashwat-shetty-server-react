import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import CourseAdd from "../components/CourseAdd";
import CourseRow from "../components/CourseRow";

export default class CourseGrid extends Component {
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

    render(){
        return (
            <div>
                <table className="table">
                    <tbody>
                        <div className="row">
                            {   this.state.courses.map((course, key) =>
                                <div className="form-group col-sm-12 col-md-4 col-lg-2">
                                    <CourseCard course={course}
                                                key={key}
                                                updateCourse={this.updateCourse}
                                                deleteCourse={this.deleteCourse}
                                                selectCourse={this.selectCourse}/>
                                </div>
                            )}
                        </div>
                    </tbody>
                </table>
            </div>
        )
    }
}