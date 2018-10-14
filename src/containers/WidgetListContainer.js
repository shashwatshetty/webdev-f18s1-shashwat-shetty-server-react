import React from 'react'
import WidgetList from "../components/WidgetList";
import {connect} from "react-redux";

const stateToPropertyMapper = state => ({
    widgets: state.widgets
});

const actionToPropertyMapper = dispatch => ({
    findAllWidgetsForTopic: (widgets, topic) => dispatch({
        type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
        widgets: widgets,
        topic: topic
    }),

    deleteWidget: (widget) => dispatch({
        type: 'DELETE_WIDGET',
        widget: widget
    }),

    updateWidget: widget => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget
    })
});

const WidgetListContainer = connect
(stateToPropertyMapper, actionToPropertyMapper)(WidgetList)

export default WidgetListContainer