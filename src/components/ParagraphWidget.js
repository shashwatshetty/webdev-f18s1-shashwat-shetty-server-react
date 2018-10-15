import React from 'react'

const ParagraphWidget = ({widget, updateWidget, preview}) => {
    const changeParaText = event => {
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
                       htmlFor={"para" + widget.id}>
                    Paragraph Text
                </label>
                <textarea id={"para" + widget.id}
                          onChange={changeParaText}
                          className="col-sm-12 col-md-6 col-lg-9 form-control"
                          rows="3"
                          placeholder="Lorem Ipsum"/>
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
                    <p>{widget.text}</p>
                </div>
            </div>
        </div>
    )
};

export default ParagraphWidget