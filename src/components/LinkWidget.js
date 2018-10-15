import React from 'react'

const LinkWidget = ({widget, updateWidget, preview}) => {
    const changeLinkUrl = event => {
        widget.linkUrl = event.target.value;
        updateWidget(widget)
    };

    const changeLinkText = event => {
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
                       htmlFor={"link" + widget.id}>
                    Link URL
                </label>
                <input type="url"
                       id={"link" + widget.id}
                       className="col-sm-12 col-md-6 col-lg-9 form-control"
                       onChange={changeLinkUrl}
                       placeholder="https://example.com"/>
            </div>
            <div hidden={preview} className="row form-group">
                <label className="col-sm-12 col-md-6 col-lg-3">
                    Link Text
                </label>
                <input type="text"
                       onChange={changeLinkText}
                       className="col-sm-12 col-md-6 col-lg-9 form-control"
                       placeholder="Widget name"/>
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
                    <a href={widget.linkUrl}>{widget.text}</a>
                </div>
            </div>
        </div>
    )
};

export default LinkWidget