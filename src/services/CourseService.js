let courses = [
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                title: 'Week 1',
                lessons: [
                    {
                        title: 'Lesson 1',
                        topics: [
                            {
                                id: '123',
                                title: 'topic 1',
                                widgets: [
                                    {
                                        id: '089',
                                        title: 'para 1',
                                        type: 'PARAGRAPH',
                                        text: 'Hi, I am Shashwat Shetty. I am a second year Graduate student. I study in NEU. I live in Boston. I am from India.',
                                    },
                                    {
                                        id: '456',
                                        title: 'list 1',
                                        type: 'LIST',
                                        options: 'option 1\noption 2\noption 3'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '234',
                                        title: 'widget 2',
                                        type: 'HEADING',
                                        size: 2,
                                        text: 'Heading 2'
                                    },
                                    {
                                        id: '345',
                                        title: 'widget 3',
                                        type: 'HEADING',
                                        size: 3,
                                        text: 'Heading 3'
                                    }
                                ]
                            },
                            {
                                id: '234',
                                title: 'topic 2',
                                widgets: [
                                    {
                                        title: 'widget a'
                                    },
                                    {
                                        title: 'widget b'
                                    },
                                    {
                                        title: 'widget c'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Lesson 2',
                        topics: [
                            {
                                title: 'topic a'
                            },
                            {
                                title: 'topic b'
                            },
                            {
                                title: 'topic c'
                            }
                        ]
                    },
                    {
                        title: 'Lesson 3'
                    }
                ]
            },
            {
                title: 'Week 2',
                lessons: [
                    {
                        title: 'Lesson A',
                        topics: []
                    },
                    {
                        title: 'Lesson B',
                        topics: []
                    },
                    {
                        title: 'Lesson C',
                        topics: []
                    }
                ]
            },
            {
                title: 'Week 3',
                lessons: []
            }
        ]
    },
    {
        id: '234',
        title: 'CS5610',
        modules: []
    }
]

export default class CourseService {
    static findAllCourses = () =>
        courses;

    static findCourseById = id => {
        let c = {};
        courses.map(course => {
            if (course.id === id) {
                c = course;
            }
        });
        return c
    };

    static updateCourse = (id, course) => {
        courses = courses.map(c => {
            if (c.id === id) {
                c = course;
            }
        });
    };

    static createCourse = course =>
        courses.push(course);

    static deleteCourse = courseId =>
        courses = courses.filter(
            course => course.id !== courseId
        );

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