const CREATE_LESSON_API_URL = "http://localhost:8080/api/course/{courseId}/module/{moduleId}/lesson"
const FIND_ALL_LESSONS_API_URL = "http://localhost:8080/api/course/{courseId}/module/{moduleId}/lesson"
const FIND_LESSON_BY_ID_API_URL = "http://localhost:8080/api/course/{courseId}/module/{moduleId}/lesson/{lessonId}"
const UPDATE_LESSON_API_URL = "http://localhost:8080/api/course/{courseId}/module/{moduleId}/lesson/{lessonId}"
const DELETE_LESSON_API_URL = "http://localhost:8080/api/course/{courseId}/module/{moduleId}/lesson/{lessonId}"

export default class LessonService {
    static findAllLessons = (courseId, moduleId) => {
        const FIND_ALL_LESSONS_API_URL = "http://localhost:8080/api/course/" + courseId + "/module/" + moduleId + "/lesson";
        return fetch(FIND_ALL_LESSONS_API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(function (response) {
            return response.text()
                .then(function (text) {
                    return text ? JSON.parse(text) : {}
                })
        });
    };

    static findLessonById = (lessonId) => {
        return fetch(FIND_LESSON_BY_ID_API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(function (response) {
            return response.text()
                .then(function (text) {
                    return text ? JSON.parse(text) : {}
                })
        });
    };

    static createLesson = (lesson) => {
        return fetch(CREATE_LESSON_API_URL, {
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        }).then(function (response) {
            return response.text()
                .then(function (text) {
                    return text ? JSON.parse(text) : {}
                })
        });
    };

    static updateLesson = (lesson) => {
        return fetch(UPDATE_LESSON_API_URL, {
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            credentials: 'include'
        }).then(function (response) {
            return response.text()
                .then(function (text) {
                    return text ? JSON.parse(text) : {}
                })
        });
    };

    static deleteLesson = (lesson) => {
        return fetch(DELETE_LESSON_API_URL, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            credentials: 'include'
        }).then(function (response) {
            return response.text()
                .then(function (text) {
                    return text ? JSON.parse(text) : {}
                })
        });
    };
}