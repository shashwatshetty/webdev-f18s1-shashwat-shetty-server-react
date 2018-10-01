import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import CourseAdd from "../components/CourseAdd";

export default class CourseTable extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <table className="table">
                    <tbody>
                        <div className="row">
                            {   this.props.courses.map((course, key) =>
                                <div className="form-group col-sm-12 col-md-4 col-lg-2">
                                    <CourseCard course={course}
                                                key={key}
                                                deleteCourse={this.props.deleteCourse}
                                                updateCourseId={this.props.updateCourseId}/>
                                </div>
                            )}
                        </div>
                    </tbody>
                </table>
            </div>
        )
    }
}