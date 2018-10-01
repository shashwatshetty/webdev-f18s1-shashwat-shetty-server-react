import React, {Component} from 'react'

export default class CourseAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    updateForm = event =>
        this.setState({
            title: event.target.value
        })

    render() {
        return(
            <div className="row">
                <div className="col-sm-6 col-md-7 col-lg-7 form-group">
                    <input
                        onChange={this.updateForm}
                        className="form-control"/>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 form-group">
                    <button onClick={() => this.props.addCourse({
                            id: (new Date()).getTime() + '',
                            title: this.state.title})}
                            className="btn btn-danger">
                        Add
                    </button>
                </div>
            </div>
        )
    }
}