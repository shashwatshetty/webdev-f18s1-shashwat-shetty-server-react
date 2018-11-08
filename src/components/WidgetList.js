import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget"
import LinkWidget from "./LinkWidget";
import ParagraphWidget from "./ParagraphWidget";
import CourseService from "../services/CourseService";

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        props.findAllWidgetsForTopic(props.topic);
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps.topic)
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
        let id = event.target.id;
        let newType = parseInt(event.target.value);
        let newWidget = CourseService.findWidget(id);
        console.log(this.props);
        switch (newType) {
            case 0:
                newWidget = {
                    id: id,
                    title: newWidget.title,
                    text: newWidget.text,
                    type: 'HEADING',
                    size: 1
                };
                break;
            case 1:
                newWidget = {
                    id: id,
                    title: newWidget.title,
                    type: 'PARAGRAPH',
                    text: newWidget.text
                };
                break;
            case 2:
                newWidget = {
                    id: id,
                    title: newWidget.title,
                    text: newWidget.text,
                    type: 'LIST',
                    options: ''
                };
                break;
            case 3:
                newWidget = {
                    id: id,
                    title: newWidget.title,
                    type: 'IMAGE',
                    text: newWidget.text
                };
                break;
            case 4:
                newWidget = {
                    id: id,
                    title: newWidget.title,
                    type: 'LINK',
                    text: newWidget.text,
                };
                break;
        }
        this.props.updateWidget(newWidget);
    };

    render() {
        return (
            <div>
                <div>
                    {console.log(this.props)}
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
                                            title={widget.title}>
                                        <option value={0}>Heading</option>
                                        <option value={1}>Paragraph</option>
                                        <option value={2}>List</option>
                                        <option value={3}>Image</option>
                                        <option value={4}>Link</option>
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
                                {widget.type === "LIST" && <ListWidget widget={widget}
                                                                       updateWidget={this.props.updateWidget}
                                                                       preview={this.props.previewOn}/>}
                                {widget.type === "IMAGE" && <ImageWidget widget={widget}
                                                                         updateWidget={this.props.updateWidget}
                                                                         preview={this.props.previewOn}/>}
                                {widget.type === "LINK" && <LinkWidget widget={widget}
                                                                       updateWidget={this.props.updateWidget}
                                                                       preview={this.props.previewOn}/>}
                                {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget}
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