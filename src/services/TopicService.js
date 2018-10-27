const CREATE_TOPIC_API_URL = "http://localhost:8080/api/course/{courseId}/module/{moduleId}/lesson/{lessonId}/topic"
const FIND_ALL_TOPICS_API_URL = "http://localhost:8080/api/course/{courseId}/module/{moduleId}/lesson/{lessonId}/topic"
const FIND_TOPIC_BY_ID_API_URL = "http://localhost:8080/api/course/{courseId}/module/{moduleId}/lesson/{lessonId}/topic/{topicId}"
const UPDATE_TOPIC_API_URL = "http://localhost:8080/api/course/{courseId}/module/{moduleId}/lesson/{lessonId}/topic/{topicId}"
const DELETE_TOPIC_API_URL = "http://localhost:8080/api/course/{courseId}/module/{moduleId}/lesson/{lessonId}/topic/{topicId}"

export default class TopicService {
    static findAllTopics = () => {
        return fetch(FIND_ALL_TOPICS_API_URL, {
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

    static findTopicById = (topicId) => {
        return fetch(FIND_TOPIC_BY_ID_API_URL, {
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

    static createTopic = (topic) => {
        return fetch(CREATE_TOPIC_API_URL, {
            body: JSON.stringify(topic),
            headers: {
                'Content-Type': 'application/json' },
            method: 'POST',
            credentials: 'include'
        }).then(function(response) {
            return response.text()
                .then(function(text) {
                    return text ? JSON.parse(text) : {}
                })
        });
    };

    static updateTopic = (topic) => {
        return fetch(UPDATE_TOPIC_API_URL, {
            body: JSON.stringify(topic),
            headers: {
                'Content-Type': 'application/json' },
            method: 'PUT',
            credentials: 'include'
        }).then(function(response) {
            return response.text()
                .then(function(text) {
                    return text ? JSON.parse(text) : {}
                })
        });
    };

    static deleteTopic = (topic) => {
        return fetch(DELETE_TOPIC_API_URL, {
            headers: {
                'Content-Type': 'application/json' },
            method: 'DELETE',
            credentials: 'include'
        }).then(function(response) {
            return response.text()
                .then(function(text) {
                    return text ? JSON.parse(text) : {}
                })
        });
    };
}