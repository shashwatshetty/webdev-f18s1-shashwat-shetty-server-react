import CourseService from "../services/CourseService";

const WidgetReducer = (state = {widgets: [], previewFlag: false}, action) => {
    switch (action.type) {
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return {
                widgets: CourseService.findWidgets(action.topic.id),
                currentTopic: action.topic,
                previewFlag: state.previewFlag
            };

        case 'CREATE_WIDGET':
            CourseService.createWidget(state.currentTopic.id, action.widget);
            return {
                widgets: CourseService.findWidgets(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic,
                previewFlag: state.previewFlag
            };

        case 'DELETE_WIDGET':
            CourseService.deleteWidget(state.currentTopic.id, action.widget.id);
            return {
                widgets: CourseService.findWidgets(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic,
                previewFlag: state.previewFlag
            };

        case 'UPDATE_WIDGET':
            CourseService.updateWidget(state.currentTopic.id, action.widget);
            return {
                widgets: CourseService.findWidgets(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic,
                previewFlag: state.previewFlag
            };

        case 'FIND_WIDGET':
            let w = CourseService.findWidget(action.widgetId);
            return {
                widgets: state.widgets,
                currentTopic: state.currentTopic,
                previewFlag: state.previewFlag,
                currentWidget: w
            };

        case 'MOVE_UP':
            console.log(action.topic);
            CourseService.moveWidgetUp(state.currentTopic.id, action.widgetIndex);
            return {
                widgets: CourseService.findWidgets(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic
            };

        case 'MOVE_DOWN':
            CourseService.moveWidgetDown(state.currentTopic.id, action.widgetIndex);
            return {
                widgets: CourseService.findWidgets(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic
            };

        case 'TOGGLE_PREVIEW':
            return {
                widgets: state.widgets,
                currentTopic: state.currentTopic,
                previewFlag: !state.previewFlag
            };

        default:
            return state
    }
};

export default WidgetReducer