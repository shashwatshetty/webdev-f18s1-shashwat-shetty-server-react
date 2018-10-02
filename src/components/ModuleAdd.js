import React, {Component} from 'react'

export default class ModuleAdd extends Component {
    constructor(props) {
        super(props)
        this.updateForm = this.props.updateForm
        this.updateModule = this.props.updateModule
    }

    render() {
        return(
            <div className="form-row form-group justify-content-between">
                    <input
                        placeholder="Add/Update Module"
                        onChange={this.updateForm}
                        className="form-control"/>
                    <button onClick={() => this.props.addModule()}
                            className="btn btn-danger form-group">
                        <i className="fa fa-plus"></i>
                    </button>
                    <button onClick={() => this.props.updateModule()}
                            className="btn btn-danger form-group">
                        <i className="fa fa-check"></i>
                    </button>
            </div>
        )
    }
}