import React from 'react'
import HeadingWidget from "./HeadingWidget";

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        props.findAllWidgetsForTopic(props.topic);
    }

    componentDidUpdate() {
        this.props.findAllWidgetsForTopic(this.props.topic)
    }

    addWidget = () => {
        let newWidget = {
            id: (new Date()).getTime(),
            title: 'Heading Widget',
            type: 'HEADING',
            size: 1,
            text: 'Default Text'
        };
        this.props.createWidget(newWidget);
    };

    widgetTypeChange = (event) => {
        console.log(event.target)
    };

    render() {
        let widgetType
        return (
            <div>
                <div>
                    <button id="save"
                            className="btn btn-success float-right">
                        <i className="fa fa-save"/>
                    </button>

                    <button type="button"
                            onClick={() => this.props.previewToggle()}
                            className="btn btn-secondary">
                        Preview
                    </button>
                </div>
                <br/>
                <ul className="list-group">
                    {
                        this.props.currentWidgets.map((widget, index) =>
                            <li key={index}
                                className="list-group-item">
                                <span className="col-sm-12 col-md-6 col-lg-3 float-left">
                                    {widget.title}
                                </span>
                                <div className="form-row justify-content-end"
                                     hidden={this.props.previewOn}>
                                    <button className="btn btn-warning"
                                            onClick={() => this.props.moveUp(index)}
                                            hidden={index === 0}>
                                        <i className="fa fa-arrow-up"/>
                                    </button>
                                    <button className="btn btn-warning"
                                            onClick={() => this.props.moveDown(index)}
                                            hidden={index === this.props.currentWidgets.length - 1}>
                                        <i className="fa fa-arrow-down"/>
                                    </button>
                                    <select id={widget.id} className="form-control widget-type"
                                            onChange={this.widgetTypeChange}
                                            ref={node => widgetType = node}>
                                        <option>Heading</option>
                                        <option>Paragraph</option>
                                        <option>List</option>
                                        <option>Image</option>
                                        <option>Link</option>
                                    </select>
                                    <button
                                        onClick={() => this.props.deleteWidget(widget)}
                                        className="btn btn-danger">
                                        <i className="fa fa-window-close"/>
                                    </button>
                                </div>
                                <br/>
                                {widget.type === "HEADING" && <HeadingWidget widget={widget}
                                                                             updateWidget={this.props.updateWidget}
                                                                             preview={this.props.previewOn}/>}
                            </li>
                        )
                    }
                </ul>
                <br/>
                <div>
                    <button className="btn btn-danger float-left"
                            onClick={() => this.addWidget()}>
                        <i className="fa fa-plus"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default WidgetList