import React, {Component} from 'react'

const CourseCard = ({course, index, deleteCourse}) =>
    <div id={index} className="card" styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h3 className="card-title">{course.title}</h3>
            <div className="row">
                <div className="col-10">
                    <h7>Modified {(new Date).toLocaleTimeString()}</h7>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger float-right"
                            onClick={() => deleteCourse(course)}>
                        <span aria-hidden={"true"}>
                                    &times;
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>

export default CourseCard