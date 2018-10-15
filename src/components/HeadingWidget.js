import React from 'react'

const HeadingWidget = ({widget, updateWidget, preview}) => {
    const changeHeading = event => {
        widget.size = parseInt(event.target.value);
        updateWidget(widget);
    };

    const changeHeadingText = event => {
        widget.text = event.target.value;
        updateWidget(widget);
    };

    const changeWidgetName = event => {
        widget.title = event.target.value;
        updateWidget(widget);
    };

    return (
        <div className="container">
            <div hidden={preview} className="row form-group">
                <label className="col-sm-12 col-md-6 col-lg-3"
                       htmlFor={"heading" + widget.id}>
                    Heading Text
                </label>
                <input type="text"
                       className="col-sm-12 col-md-6 col-lg-9 form-control"
                       onChange={changeHeadingText}
                       placeholder="Heading text"/>
            </div>
            <div hidden={preview} className="row form-group">
                <label className="col-sm-12 col-md-6 col-lg-3">
                    Heading Size
                </label>
                <select id={"heading" + widget.id} className="col-sm-12 col-md-6 col-lg-9 form-control"
                        onChange={changeHeading}>
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                </select>
            </div>
            <div hidden={preview} className="row form-group">
                <label className="col-sm-12 col-md-6 col-lg-3">
                    Widget Name
                </label>
                <input type="text"
                       onChange={changeWidgetName}
                       className="col-sm-12 col-md-6 col-lg-9 form-control"
                       placeholder="Widget name"/>
            </div>
            <div hidden={!preview}>
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
    )
};

export default HeadingWidget