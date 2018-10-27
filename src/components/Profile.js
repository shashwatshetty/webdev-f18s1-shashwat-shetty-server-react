import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import UserService from "../services/UserService";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: {}
        };
        UserService.profile()
            .then(user => {
                console.log(user)
            })
    }

    render() {
        return (
            <Router>
                <div className="container align-self-center">
                    <div className="form-group">
                        <h1>User Profile</h1>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">
                            Username
                        </label>
                        <input type="text"
                               className="form-control"
                               id="username"
                               value="alice"
                               readOnly/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">
                            First Name
                        </label>
                        <input type="text"
                               className="form-control"
                               placeholder="Alice"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            Last Name
                        </label>
                        <input type="text"
                               className="form-control"
                               placeholder="Wonderland"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">
                            Role
                        </label>
                        <select className="form-control"
                                id="role">
                            <option>Faculty</option>
                            <option>Student</option>
                            <option>Administrator</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="dob">
                            Date of Birth
                        </label>
                        <input type="date"
                               className="form-control"
                               id="dob"/>
                    </div>

                    <div className="form-group">
                        <Link type="submit"
                                className="btn btn-primary form-control"
                                to="/courses">
                            Courses
                        </Link>
                    </div>

                    <div className="form-group">
                        <button type="submit"
                                className="btn btn-danger form-control">
                            Log Out
                        </button>
                    </div>
                </div>
            </Router>
        );
    }
}