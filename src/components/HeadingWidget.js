import React from 'react'

const HeadingWidget = ({widget}) =>
    <div className="container">
        <div className="row form-group">
            <label className="col-sm-12 col-md-6 col-lg-3"
                htmlFor={widget.id}>
                Heading Text
            </label>
            <input type="text"
                   className="col-sm-12 col-md-6 col-lg-9 form-control"
                   id={widget.id}
                   placeholder="Heading text"/>
        </div>
        <div className="row form-group">
            <label className="col-sm-12 col-md-6 col-lg-3">
                Heading Size
            </label>
            <select className="col-sm-12 col-md-6 col-lg-9 form-control">
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
            </select>
        </div>
        <div className="row form-group">
            <label className="col-sm-12 col-md-6 col-lg-3">
                Widget Name
            </label>
            <input type="text"
                   className="col-sm-12 col-md-6 col-lg-9 form-control"
                   placeholder="Widget name"/>
        </div>
        <div>
            <div className="row form-group">
                <label>Preview:</label>
            </div>
            <div className="row form-group">
                {widget.size === 1 && <h1>{widget.text}</h1>}
                {widget.size === 2 && <h2>{widget.text}</h2>}
                {widget.size === 3 && <h3>{widget.text}</h3>}
            </div>
        </div>
    </div>

export default HeadingWidget