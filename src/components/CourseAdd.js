import React, {Component} from 'react'

export default class CourseAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            currentCourse: props.selectedCourse
        };
        this.addCourse = this.props.addCourse;
        this.updateCourse = this.props.updateCourse;
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            title: newProps.title,
            currentCourse: newProps.selectedCourse
        })
    }

    updateForm = event =>
        this.setState({
            title: event.target.value,
        });

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 col-md-7 col-lg-7 form-group">
                    <input name="addUpdateCourse"
                           value={this.state.title}
                           onChange={this.updateForm}
                           className="form-control"/>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 form-group">
                    <button onClick={() => this.addCourse({
                        title: this.state.title
                    })}
                            className="btn btn-danger">
                        <i className="fa fa-plus-square"/>
                    </button>
                    &nbsp;&nbsp;
                    <button onClick={() => this.updateCourse({
                        cId: this.state.currentCourse.id,
                        title: this.state.title
                    })}
                            className="btn btn-danger">
                        <i className="fa fa-wrench"/>
                    </button>
                </div>
            </div>
        )
    }
}