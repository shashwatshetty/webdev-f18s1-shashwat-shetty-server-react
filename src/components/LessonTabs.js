import React, {Component} from 'react'
import LessonTabItem from "./LessonTabItem";

export default class LessonTabs extends Component {
    constructor(props) {
        super(props);
        this.course = this.props.course
        this.module = this.props.module
        this.lessons = this.props.lessons
        console.log(this.props.state)
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link active">
                        <i className="fa fa-plus"></i>
                    </button>
                </li>
                {
                    this.lessons.map((lesson, key) =>
                        <LessonTabItem
                            lesson={lesson}
                            key={key}/>
                    )
                }
            </ul>
        )
    }

}