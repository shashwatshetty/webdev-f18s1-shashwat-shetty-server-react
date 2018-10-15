import CourseService from "../services/CourseService";

const WidgetReducer = (state = {widgets: [], previewFlag: false}, action) => {
    switch (action.type) {
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return {
                widgets: CourseService.findAllWidgetsForTopic(action.topic.id),
                currentTopic: action.topic,
                previewFlag: state.previewFlag,
                currentWidget: state.currentWidget
            };

        case 'CREATE_WIDGET':
            CourseService.createWidget(state.currentTopic.id, action.widget);
            return {
                widgets: CourseService.findAllWidgetsForTopic(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic,
                previewFlag: state.previewFlag,
                currentWidget: state.currentWidget
            };

        case 'DELETE_WIDGET':
            CourseService.deleteWidget(state.currentTopic.id, action.widget.id);
            return {
                widgets: CourseService.findAllWidgetsForTopic(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic,
                previewFlag: state.previewFlag,
                currentWidget: state.currentWidget
            };

        case 'UPDATE_WIDGET':
            CourseService.updateWidget(state.currentTopic.id, action.widget);
            return {
                widgets: CourseService.findAllWidgetsForTopic(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic,
                previewFlag: state.previewFlag,
                currentWidget: state.currentWidget
            };

        case 'FIND_WIDGET':
            let w = CourseService.findWidget(action.widgetId);
            return {
                widgets: state.widgets,
                currentTopic: state.currentTopic,
                previewFlag: state.previewFlag,
                currentWidget: w
            };

        case 'FIND_ALL_WIDGETS':
            let allWidgets = []
            for (let t in this.state.currentLesson.topics) {
                for (let w in this.state.currentLesson.topics[t].widgets) {
                    allWidgets.push(this.state.currentLesson.topics[t].widgets[w])
                }
            }
            return {
                widgets: state.widgets,
                currentTopic: state.currentTopic,
                allWidgets: allWidgets
            };

        case 'MOVE_UP':
            CourseService.moveWidgetUp(state.currentTopic.id, action.widgetIndex);
            return {
                widgets: CourseService.findAllWidgetsForTopic(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic,
                allWidgets: allWidgets,
                currentWidget: state.currentWidget
            };

        case 'MOVE_DOWN':
            CourseService.moveWidgetDown(state.currentTopic.id, action.widgetIndex);
            return {
                widgets: CourseService.findAllWidgetsForTopic(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic,
                allWidgets: allWidgets,
                currentWidget: state.currentWidget
            };

        case 'TOGGLE_PREVIEW':
            return {
                widgets: state.widgets,
                currentTopic: state.currentTopic,
                previewFlag: !state.previewFlag,
                currentWidget: state.currentWidget
            };

        default:
            return state
    }
};

export default WidgetReducer