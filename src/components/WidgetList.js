import React from 'react'

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        props.findAllWidgetsForTopic(props.topic);
    }

    render() {
        return(
            <ul className="list-group">
                {
                    this.props.currentWidgets.map((widget, index) =>
                        <li key={index}
                            className="list-group-item">
                            {widget.title}
                        </li>
                    )
                }

            </ul>
        )
    }
}

export default WidgetList