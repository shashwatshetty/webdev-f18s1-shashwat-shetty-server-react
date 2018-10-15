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

    render() {
        return (
            <div>
                <div>
                    <button id="save"
                            className="btn btn-success float-right">
                        <i className="fa fa-save"/>
                    </button>

                    <button type="button"
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
                                <button
                                    onClick={() => this.props.deleteWidget(widget)}
                                    className="btn btn-danger float-right">
                                    Delete
                                </button>
                                {widget.type === "HEADING" && <HeadingWidget updateWidget={this.props.updateWidget}
                                                                             widget={widget}/>}
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