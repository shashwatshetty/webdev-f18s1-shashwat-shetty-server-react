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
        let moduleList = this.findAllModules(selectedCourse);
        let m = {};
        moduleList.map(e => {
            if (e === selectedModule) {
                m = e;
            }
        });
        return m.lessons
    }
}