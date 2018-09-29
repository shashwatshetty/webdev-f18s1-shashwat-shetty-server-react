import React, {Component} from 'react'
import CourseCard from "./CourseCard";

export default class WhiteBoard extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <h1>WhiteBoard</h1>
                <div className={'card-deck'}>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        );
    }

}