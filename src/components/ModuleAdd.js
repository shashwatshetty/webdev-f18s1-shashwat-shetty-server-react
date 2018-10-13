import React from 'react'

const ModuleAdd = ({updateForm, addModule, updateModule}) =>
    <div>
        <input
            placeholder="Add/Update Module"
            onChange={updateForm}
            className="form-control"/>
        <br/>
        <div className="row justify-content-between">
            <div className="col">
                <button onClick={() => addModule()}
                        className="btn btn-danger form-group">
                    <i className="fa fa-plus"/>
                </button>
            </div>
            <div className="col">
                <button onClick={() => updateModule()}
                        className="btn btn-danger form-group float-right">
                    <i className="fa fa-check"/>
                </button>
            </div>
        </div>
    </div>;

export default ModuleAdd