import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import CourseRow from "../components/CourseRow";
import CourseAdd from "../components/CourseAdd";

export default class CourseTable extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div>
                    <CourseAdd addCourse={this.props.addCourse}/>
                </div>
                <div className="row">
                    {   this.props.courses.map((course, key) =>
                        <div className="form-group col-sm-12 col-md-4 col-lg-2">
                            <CourseCard course={course}
                                        key={key}
                                        deleteCourse={this.props.deleteCourse}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}