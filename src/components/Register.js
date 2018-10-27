import React, {Component} from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <h1>Register Here</h1>
                </div>
                <div className="row form-group">
                    <div className="col">
                        <label htmlFor="fname"
                               className="control-label">
                            First Name
                        </label>
                    </div>
                    <div className="col-10">
                        <input type="text"
                               className="form-control"
                               id="fname"
                               placeholder="John"
                               required/>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col">
                        <label htmlFor="lname"
                               className="control-label">
                            Last Name
                        </label>
                    </div>
                    <div className="col-10">
                        <input type="text"
                               className="form-control"
                               id="lname"
                               placeholder="Doe"
                               required/>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col">
                        <label htmlFor="username"
                               className="control-label">
                            Username
                        </label>
                    </div>
                    <div className="col-10">
                        <input type="text"
                               className="form-control"
                               id="username"
                               placeholder="jdoe123"
                               required/>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col">
                        <label htmlFor="password"
                               className="control-label">
                            Password
                        </label>
                    </div>
                    <div className="col-10">
                        <input type="password"
                               className="form-control"
                               id="password"
                               placeholder="password@123"
                               required/>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col">
                        <label htmlFor="vpassword"
                               className="control-label">
                            Verify Password
                        </label>
                    </div>
                    <div className="col-10">
                        <input type="password"
                               className="form-control"
                               id="vpassword"
                               placeholder="password@123"
                               required/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col">
                        <button className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-link">
                            <u>
                                Log In.
                            </u>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}