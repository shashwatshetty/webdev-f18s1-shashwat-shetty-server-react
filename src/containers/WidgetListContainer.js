import React from 'react'
import WidgetList from "../components/WidgetList";
import {connect} from 'react-redux';

const stateToPropertyMapper = state => ({
    currentWidgets: state.widgets
});
const actionToPropertyMapper = dispatch => ({
    findAllWidgetsForTopic: (topic) => dispatch({
        type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
        topic: topic
    }),

    createWidget: (widget) => dispatch({
        type: 'CREATE_WIDGET',
        widget: widget
    }),

    deleteWidget: (widget) => dispatch({
        type: 'DELETE_WIDGET',
        widget: widget
    }),

    updateWidget: (widget) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget
    }),

    findWidget: (widgetId) => dispatch({
        type: 'UPDATE_WIDGET',
        widgetId: widgetId
    })
});

const WidgetListContainer = connect
(stateToPropertyMapper, actionToPropertyMapper)(WidgetList)

export default WidgetListContainer