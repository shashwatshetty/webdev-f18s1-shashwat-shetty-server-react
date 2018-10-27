const LOGIN_API_URL = "http://localhost:8080/api/login"
const PROFILE_API_URL = "http://localhost:8080/api/profile"
const REGISTER_API_URL = "http://localhost:8080/api/register"
const LOGOUT_API_URL = "http://localhost:8080/api/logout"

export default class UserService {
    static login = (user) => {
        return fetch(LOGIN_API_URL, {
            body: JSON.stringify(user),
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

    static profile = () => {
        return fetch(PROFILE_API_URL, {
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

    static logout = () => {
        return fetch(LOGOUT_API_URL, {
            method: 'POST',
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

    static register = (user) => {
        return fetch(REGISTER_API_URL, {
            method: 'POST',
            body: JSON.stringify(user),
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
    }
}