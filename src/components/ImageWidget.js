import React from 'react'
import "../default.png"

const ImageWidget = ({widget, updateWidget, preview}) => {
    const changeImageUrl = event => {
        widget.imgUrl = event.target.value;
        updateWidget(widget)
    };

    const changeWidgetName = event => {
        widget.title = event.target.value;
        updateWidget(widget);
    };

    return (
        <div className="container">
            <div hidden={preview} className="row form-group">
                <label className="col-sm-12 col-md-6 col-lg-3"
                       htmlFor={"image" + widget.id}>
                    Image URL
                </label>
                <input type="url"
                       className="col-sm-12 col-md-6 col-lg-9 form-control"
                       onChange={changeImageUrl}
                       placeholder="https://example.com"/>
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
                    <img src={widget.imgUrl}/>
                </div>
            </div>
        </div>
    )
};

export default ImageWidget