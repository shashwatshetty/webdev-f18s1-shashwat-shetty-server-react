export default class WidgetService {
    static findAllWidget = (courseId) => {
        const FIND_ALL_MODULES_API_URL = "http://localhost:8080/api/course/" + courseId + "/module";
        return fetch(FIND_ALL_MODULES_API_URL, {
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

    static findModuleById = (moduleId) => {
        return fetch(FIND_MODULE_BY_ID_API_URL, {
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

    static createModule = (module) => {
        return fetch(CREATE_MODULE_API_URL, {
            body: JSON.stringify(module),
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

    static updateModule = (module) => {
        return fetch(UPDATE_MODULE_API_URL, {
            body: JSON.stringify(module),
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

    static deleteModule = (module) => {
        return fetch(DELETE_MODULE_API_URL, {
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