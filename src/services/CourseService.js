import UserService from "./UserService";

let courses = [
    {
        "cId": 6,
        "title": "cs5200",
        "modules": [
            {
                "mId": 4,
                "title": "Module 1",
                "lessons": [
                    {
                        "lId": 2,
                        "title": "lesson 1",
                        "topics": [
                            {
                                "tId": 0,
                                "title": "topic 1",
                                "widgets": [
                                    {
                                        "wid": 0,
                                        "title": "widget 1"
                                    },
                                    {
                                        "wid": 0,
                                        "title": "widget 2"
                                    }
                                ]
                            },
                            {
                                "tId": 1,
                                "title": "topic 2",
                                "widgets": null
                            }
                        ]
                    },
                    {
                        "lId": 3,
                        "title": "lesson 2",
                        "topics": null
                    }
                ]
            },
            {
                "mId": 5,
                "title": "Module 2",
                "lessons": null
            },
            {
                "mId": 16,
                "title": "Mod-1",
                "lessons": []
            }
        ]
    },
    {
        "cId": 7,
        "title": "cs5610",
        "modules": null
    },
    {
        "cId": 8,
        "title": "cs5500",
        "modules": null
    }
]
// const COURSES_API_URL = "https://wbdvf18-shash-shetty-srvr-java.herokuapp.com/api/course/"

const COURSES_API_URL = "http://localhost:8080/api/course/"

export default class CourseService {
    static findAllCourses = () => {
        return fetch(COURSES_API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(function(response) {
            return response.text()
                .then(function(text) {
                    return text ? JSON.parse(text) : []
                })
        });
    };

    static createCourse = (course) => {
        return fetch(COURSES_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json' },
            method: 'POST',
            credentials: 'include'
        }).then(function(response) {
            return response.text()
                .then(function(text) {
                    return text ? JSON.parse(text) : []
                })
        });
    };

    static findCourseById = (courseId) => {
        const FIND_COURSE_BY_ID_API_URL = COURSES_API_URL + courseId;
        console.log()
        return fetch(FIND_COURSE_BY_ID_API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(function(response) {
            return response.text()
                .then(function(text) {
                    return text ? JSON.parse(text) : {}
                })
        });
    };

    static updateCourse = (courseId, course) => {
        const UPDATE_COURSE_API_URL = COURSES_API_URL + courseId;
        return fetch(UPDATE_COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json' },
            method: 'PUT',
            credentials: 'include'
        }).then(function(response) {
            return response.text()
                .then(function(text) {
                    return text ? JSON.parse(text) : []
                })
        });
    };

    static deleteCourse = courseId => {
        const DELETE_COURSE_API_URL = COURSES_API_URL + courseId;
        console.log(DELETE_COURSE_API_URL)
        return fetch(DELETE_COURSE_API_URL, {
            headers: {
                'Content-Type': 'application/json' },
            method: 'DELETE',
            credentials: 'include'
        }).then(function(response) {
            return response.text()
                .then(function(text) {
                    return text ? JSON.parse(text) : []
                })
        });
    };

    static findAllModules = selectedCourse => {
        let c = {};
        courses.map(course => {
            if (course.id === selectedCourse.id) {
                c = course;
            }
        });
        return c.modules
    };

    static findAllLessons = (selectedCourse, selectedModule) => {
        let moduleList = CourseService.findAllModules(selectedCourse);
        let m = {};
        moduleList.map(e => {
            if (e === selectedModule) {
                m = e;
            }
        });
        return m.lessons
    };

    static findWidgets = topicId => {
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id === topicId) {
                            let widgets = courses[c].modules[m].lessons[l].topics[t].widgets;
                            return widgets ? widgets : [];
                        }
                    }
                }
            }
        }
    };

    static findWidget = widgetId => {
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        for (let w in courses[c].modules[m].lessons[l].topics[t].widgets) {
                            if (courses[c].modules[m].lessons[l].topics[t].widgets[w].id === widgetId) {
                                return courses[c].modules[m].lessons[l].topics[t].widgets[w]
                            }
                        }
                    }
                }
            }
        }
    };

    static createWidget = (topicId, widget) => {
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id === topicId) {
                            courses[c].modules[m].lessons[l].topics[t].widgets.push(widget)
                        }
                    }
                }
            }
        }
    };

    static updateWidget = (topicId, widget) => {
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id === topicId) {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(w => w.id === widget.id);
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] = widget;
                        }
                    }
                }
            }
        }
    };

    static deleteWidget = (topicId, widgetId) => {
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id === topicId) {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(w => w.id === widgetId);
                            courses[c].modules[m].lessons[l].topics[t].widgets.splice(widgetIndex, 1)
                        }
                    }
                }
            }
        }
    };

    static moveWidgetUp = (topicId, index) => {
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id === topicId) {
                            let temp = courses[c].modules[m].lessons[l].topics[t].widgets[index];
                            courses[c].modules[m].lessons[l].topics[t].widgets[index] = courses[c].modules[m].lessons[l].topics[t].widgets[index - 1];
                            courses[c].modules[m].lessons[l].topics[t].widgets[index - 1] = temp;
                        }
                    }
                }
            }
        }
    }

    static moveWidgetDown = (topicId, index) => {
        console.log(topicId + "    " + index)
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id === topicId) {
                            let temp = courses[c].modules[m].lessons[l].topics[t].widgets[index];
                            courses[c].modules[m].lessons[l].topics[t].widgets[index] = courses[c].modules[m].lessons[l].topics[t].widgets[index + 1];
                            courses[c].modules[m].lessons[l].topics[t].widgets[index + 1] = temp;
                        }
                    }
                }
            }
        }
    }
}