import CourseService from "../services/CourseService";

const WidgetReducer = (state = {widgets: []}, action) => {
    switch(action.type) {
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                widgets: CourseService.findAllWidgetsForTopic(action.topic),
                currentTopic: action.topic
            };

        case "CREATE_WIDGET":
            CourseService.createWidget(state.currentTopic, action.widget)
            return {
                widgets: CourseService.findAllWidgetsForTopic(action.topic).slice(0),
                currentTopic: state.currentTopic
            };

        case "DELETE_WIDGET":
            CourseService.deleteWidget(state.currentTopic, action.widget)
            return {
                widgets: CourseService.findAllWidgetsForTopic(action.topic).slice(0),
                currentTopic: state.currentTopic
            };

        case "UPDATE_WIDGET":
            CourseService.updateWidget(state.currentTopic, action.widget)
            return {
                widgets: CourseService.findAllWidgetsForTopic(action.topic).slice(0),
                currentTopic: state.currentTopic
            };
    }
};

export default WidgetReducer