import React, {Component} from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";

import WidgetReducer from "../reducers/WidgetReducer"
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import WidgetListContainer from "../containers/WidgetListContainer"
import CourseService from "../services/CourseService";
import ModuleService from "../services/ModuleService";

const store = createStore(WidgetReducer)

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        const cId = props.match.params.courseId;
        this.state = {
            course: {},
            currentModule: {},
            currentLesson: {},
            currentTopic: {},
            title: '',
            modules: [],
            lessons: [],
            topics: []
        };
        CourseService.findCourseById(cId)
            .then(course => {
                this.setState({
                    course: course
                })
            })
            .then(this.initialiseState);
    }

    initialiseState = () => {
        let selectedModule = {};
        let selectedLesson = {};
        let selectedTopic = {};
        let lessons = [];
        let topics = [];

        if (this.state.course.modules) {
            selectedModule = this.state.course.modules[0]
        }
        if (selectedModule && selectedModule.lessons) {
            lessons = selectedModule.lessons;
            selectedLesson = selectedModule.lessons[0]
        }
        if (selectedLesson && selectedLesson.topics) {
            topics = selectedLesson.topics;
            selectedTopic = selectedLesson.topics[0]
        }
        this.setState({
            currentModule: selectedModule,
            currentLesson: selectedLesson,
            currentTopic: selectedTopic,
            title: '',
            modules: this.state.course.modules,
            lessons: lessons,
            topics: topics
        })
    };

    updateForm = event =>
        this.setState({
            title: event.target.value
        });

    // CRUD for Modules

    selectModule = module => {
        let lessonList = module.lessons ? module.lessons : [];
        let lesson = (lessonList && lessonList.length > 0) ? lessonList[0] : {};
        let topicList = (lesson && lesson.topics) ? lesson.topics : [];
        let topic = (topicList && topicList.length > 0) ? topicList[0] : {};
        this.setState({
            currentModule: module,
            lessons: lessonList,
            currentLesson: lesson,
            topics: topicList,
            currentTopic: topic
        });
    };

    addModule = () => {
        let id = (new Date()).getTime();
        let moduleToAdd = {
            id: id,
            title: this.state.title === "" ? "New Module" : this.state.title,
        };

        let moduleList = this.state.modules;
        moduleList.push(moduleToAdd);
        let currentCourse = this.state.course;
        currentCourse.modules = moduleList;
        this.setState({
            course: currentCourse,
            modules: moduleList
        });
    };

    deleteModule = moduleToDelete => {
        let moduleList = this.state.modules;
        moduleList.splice(moduleList.indexOf(moduleToDelete), 1);
        this.setState({
            currentModule: {},
            currentLesson: {},
            currentTopic: {},
            modules: moduleList,
            lessons: [],
            topics: []
        });
    };

    updateModule = () => {
        let moduleList = this.state.modules;
        moduleList.map(module => {
            if (module === this.state.currentModule) {
                module.title = this.state.title
            }
        });
        this.setState({
            modules: moduleList
        });
    };

    // CRUD for Lessons

    selectLesson = lesson => {
        this.setState({
            currentLesson: lesson,
            topics: lesson.topics ? lesson.topics : [],
            currentTopic: (lesson.topics && lesson.topics.length > 0) ? lesson.topics[0] : {}
        });
    };

    addLesson = () => {
        let id = (new Date()).getTime();
        let lessonToAdd = {
            id: id,
            title: this.state.title === "" ? "New Lesson" : this.state.title,
        };

        let lessonList = this.state.lessons;
        lessonList.push(lessonToAdd);
        this.setState({
            lessons: lessonList
        });
    };

    deleteLesson = lessonToBeDeleted => {
        let lessonList = this.state.lessons;
        lessonList.splice(lessonList.indexOf(lessonToBeDeleted), 1);
        this.setState({
            lessons: lessonList,
            topics: []
        });
    };

    updateLesson = () => {
        let lessonList = this.state.lessons;
        lessonList.map(lesson => {
            if (lesson === this.state.currentLesson) {
                lesson.title = this.state.title
            }
        });
        this.setState({
            lessons: lessonList
        });
    };

    // CRUD for Topics

    selectTopic = topic =>
        this.setState({
            currentTopic: topic
        });

    addTopic = () => {
        let id = (new Date()).getTime();
        let topicToAdd = {
            id: id,
            title: this.state.title === "" ? "New Topic" : this.state.title,
        };

        let topicList = this.state.topics;
        topicList.push(topicToAdd);
        this.setState({
            topics: topicList
        });
    };

    deleteTopic = topicToBeDeleted => {
        let topicList = this.state.topics;
        topicList.splice(topicList.indexOf(topicToBeDeleted), 1);
        this.setState({
            topics: topicList
        });
    };

    updateTopic = () => {
        let topicList = this.state.topics;
        topicList.map(topic => {
            if (topic === this.state.currentTopic) {
                topic.title = this.state.title
            }
        });
        this.setState({
            topics: topicList
        });
    };

    render() {
        return (
            <div className="container-fluid">
                <h3 className="navbar-header">
                    {this.state.course.title}
                </h3>
                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            course={this.state.course}
                            modules={this.state.modules}
                            updateForm={this.updateForm}
                            selectModule={this.selectModule}
                            addModule={this.addModule}
                            deleteModule={this.deleteModule}
                            updateModule={this.updateModule}/>
                    </div>

                    <div className="col-8">
                        <LessonTabs
                            lessons={this.state.lessons}
                            selectedLesson={this.state.currentLesson}
                            updateForm={this.updateForm}
                            selectLesson={this.selectLesson}
                            addLesson={this.addLesson}
                            deleteLesson={this.deleteLesson}
                            updateLesson={this.updateLesson}/>

                        <br/>

                        <TopicPills
                            topics={this.state.topics}
                            selectedTopic={this.state.currentTopic}
                            updateForm={this.updateForm}
                            selectTopic={this.selectTopic}
                            addTopic={this.addTopic}
                            deleteTopic={this.deleteTopic}
                            updateTopic={this.updateTopic}/>
                        <br/>


                        <Provider store={store}>
                            <div>
                                {console.log(this.state.currentTopic)}
                                <WidgetListContainer
                                    topic={this.state.currentTopic}/>
                            </div>
                        </Provider>

                    </div>
                </div>
            </div>
        )
    }
}