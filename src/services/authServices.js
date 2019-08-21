import { config } from '@/config/config';
import { EventBus } from '@/event-bus';

let authString = btoa(`${config.appKey}:${config.appSecret}`);



export const authenticate = {
    methods: {
        register(username, password, email) {

            // TODO: This should be refactored without a plugin $http but directly with Axios!

            return this.authenticate(`/user/${config.appKey}`, username, password, email)
        },
        login(username, password) {
            return this.authenticate(`/user/${config.appKey}/login`, username, password);
        },
        authenticate(url, username, password, email = null) {

            // If there is an email then we will register the user, this might need refactoring
            let authObject = {};
            if (email) {
                authObject = {
                    email,
                    username,
                    password
                }
            } else {
                authObject = {
                    username,
                    password
                }
            }
            return this.$http.post(url, {
                // I am using the spread operator because the email is saved in Kinvey as an object.
                ...authObject
            }).then(({ data }) => {
                loginUser({
                    username: data.username,
                    authToken: data._kmd.authtoken
                })

                // Return the data so that we can use it in the next callback
                return data;
            });
        }
    },
    created() {
        // Set the defailt header when the mixin/service is imported into the component
        this.$http.defaults.headers.post["Authorization"] = `Basic ${authString}`;
    }
}

const loginUser = user => {
    localStorage.setItem('username', user.username);
    localStorage.setItem('authToken', user.authToken);

    return user;
}

export const logoutUser = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("authToken");
}

export const authService = {
    data() {
        return {
            authToken: localStorage.getItem('authToken')
        }
    },
    computed: {
        isAuthenticated() {
            return this.authToken !== null
        }
    },
    created() {
        EventBus.$on("logged-in", authToken => {
            console.log(this.isAuthenticated)
            this.authToken = authToken;
        });
        EventBus.$on("logged-out", authToken => {
            this.authToken = null;
            logoutUser()
        });
    }
}