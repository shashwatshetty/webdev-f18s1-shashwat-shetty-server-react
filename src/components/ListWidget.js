import React from 'react'

const ListWidget = ({widget, updateWidget, preview}) => {
    const changeListOptions = event => {
        widget.options = event.target.value;
        updateWidget(widget);
    };

    const changeListType = event => {
        let newWidget = {
            id: widget.id,
            title: widget.title,
            type: widget.type,
            options: widget.options,
            listType: event.target.value
        };
        updateWidget(newWidget)
    };

    const changeWidgetName = event => {
        widget.title = event.target.value;
        updateWidget(widget);
    };

    const getList = () => {
        let listType = widget.listType ? widget.listType : "U";
        if (listType === "U") {
            return (
                <ul>
                    {
                        widget.options.split("\n").map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
            )
        } else {
            return (
                <ol>
                    {
                        widget.options.split("\n").map((item, index) => <li key={index}>{item}</li>)
                    }
                </ol>
            )
        }
    };

    return (
        <div className="container">
            <div hidden={preview} className="row form-group">
                <label className="col-sm-12 col-md-6 col-lg-3"
                       htmlFor={"list" + widget.id}>
                    List Items
                </label>
                <textarea id={"list" + widget.id}
                          onChange={changeListOptions}
                          className="col-sm-12 col-md-6 col-lg-9 form-control"
                          rows="3"
                          placeholder="Put each item in a separate row."/>
            </div>
            <div hidden={preview} className="row form-group">
                <label className="col-sm-12 col-md-6 col-lg-3">
                    List Type
                </label>
                <select id={"list" + widget.id} className="col-sm-12 col-md-6 col-lg-9 form-control"
                        onChange={changeListType}>
                    <option value={"U"}>Unordered List</option>
                    <option value={"O"}>Ordered List</option>
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
                    {getList()}
                </div>
            </div>
        </div>
    )
};

export default ListWidget