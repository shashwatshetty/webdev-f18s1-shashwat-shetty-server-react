import CourseService from "../services/CourseService";

const WidgetReducer = (state = {widgets: []}, action) => {
    switch(action.type) {
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return {
                widgets: CourseService.findAllWidgetsForTopic(action.topic.id),
                currentTopic: action.topic
            };

        case 'CREATE_WIDGET':
            CourseService.createWidget(state.currentTopic.id, action.widget.id);
            return {
                widgets: CourseService.findAllWidgetsForTopic(action.topic.id).slice(0),
                currentTopic: state.currentTopic
            };

        case 'DELETE_WIDGET':
            CourseService.deleteWidget(state.currentTopic.id, action.widget.id);
            return {
                widgets: CourseService.findAllWidgetsForTopic(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic
            };

        case 'UPDATE_WIDGET':
            CourseService.updateWidget(state.currentTopic.id, action.widget.id);
            return {
                widgets: CourseService.findAllWidgetsForTopic(state.currentTopic.id).slice(0),
                currentTopic: state.currentTopic
            };

        case 'FIND_WIDGET':
            let w = CourseService.findWidget(action.widgetId);
            return {
                currentWidget: w
            };

        case 'FIND_ALL_WIDGETS':
            let allWidgets = []
            for(let t in this.state.currentLesson.topics) {
                for(let w in this.state.currentLesson.topics[t].widgets) {
                    allWidgets.push(this.state.currentLesson.topics[t].widgets[w])
                }
            }
            return {
                allWidgets: allWidgets
            };

        default:
            return state
    }
};

export default WidgetReducer