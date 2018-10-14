let courses = [
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                id: 'W1',
                title: 'Week 1',
                lessons: [
                    {
                        title: 'Lesson 1',
                        topics: [
                            {
                                title: 'Topic 1'
                            }
                        ]
                    },
                    {
                        title: 'Lesson 2'
                    },
                    {
                        title: 'Lesson 3'
                    }
                ]
            },
            {
                id: 'W2',
                title: 'Week 2',
                lessons: [
                    {
                        title: 'Lesson A'
                    },
                    {
                        title: 'Lesson B'
                    },
                    {
                        title: 'Lesson C'
                    }
                ]
            },
            {
                id: 'W2',
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
    findAllCourses = () =>
        courses

    findCourseById = id => {
        let c = {};
        courses.map(course => {
            if (course.id === id) {
                c = course;
            }
        });
        return c
    }

    updateCourse = (id, course) => {
        courses = courses.map(c => {
            if (c.id === id) {
                c = course;
            }
        });
    }

    createCourse = course =>
        courses.push(course)

    deleteCourse = courseId =>
        courses = courses.filter(
            course => course.id !== courseId
        )

    findAllModules = selectedCourse => {
        let c = {};
        courses.map(course => {
            if (course.id === selectedCourse.id) {
                c = course;
            }
        });
        return c.modules
    }

    findAllLessons = (selectedCourse, selectedModule) => {
        let moduleList = this.findAllModules(selectedCourse);
        let m = {}
        moduleList.map(e => {
            if (e === selectedModule) {
                m = e;
            }
        });
        return m.lessons
    }
}