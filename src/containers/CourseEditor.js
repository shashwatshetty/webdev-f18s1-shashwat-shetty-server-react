import React, {Component} from 'react'

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.courseId)
    }

    render(){
        return (
            <h2>Course Editor</h2>
        )
    }
}