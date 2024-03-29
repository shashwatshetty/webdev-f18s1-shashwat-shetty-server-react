import React from 'react'
import {Link} from "react-router-dom";

const CourseListNav = () =>
    <div>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid row">
                <div className="col-md-12 col-lg-3 form-group">
                    <div className="navbar-header">
                        <h3 className="navbar-header">
                            Course Manager
                        </h3>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 form-group">
                    <div className="row float-right">
                        <Link to="/courses/table/" className="btn btn-dark">
                            <i className="fa fa-table"></i>
                        </Link>
                        <Link to="/courses/grid/" className="btn btn-dark">
                            <i className="fa fa-th-large"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>

export default CourseListNav