import React from 'react'
import WidgetList from "../components/WidgetList";
import {connect} from 'react-redux';

const stateToPropertyMapper = state => ({
    currentWidgets: state.widgets,
    previewOn: state.previewFlag
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
        type: 'FIND_WIDGET',
        widgetId: widgetId
    }),

    moveUp: (index) => dispatch({
        type: 'MOVE_UP',
        widgetIndex: index
    }),

    moveDown: (index) => dispatch({
        type: 'MOVE_DOWN',
        widgetIndex: index
    }),

    previewToggle: () => dispatch({
        type: 'TOGGLE_PREVIEW'
    })
});

const WidgetListContainer = connect
(stateToPropertyMapper, actionToPropertyMapper)(WidgetList)

export default WidgetListContainer