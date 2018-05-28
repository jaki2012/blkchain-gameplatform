import Vue from 'vue'

export default {
    state: {
        loginPage: false,
        firstShow: false,
        userLoggedIn: false
    },
    mutations: {
        LOGIN: state => state.userLoggedIn = true,
        LOGOUT: state => state.userLoggedIn = false,
        LEAVE_LOGINPAGE: state => state.loginPage = false,
        ENTER_LOGINPAGE: state => state.loginPage = true,
        SHOW_FIRST: state => state.firstShow = true,
        RESET_FIRSTSHOW: state => state.firstShow = false
    },
    actions: {
        leaveLoginPage({commit}){
            commit("LEAVE_LOGINPAGE")
        },
        enterLoginPage({commit}){
            commit("ENTER_LOGINPAGE")
        },
        showFirst({commit}){
            commit("SHOW_FIRST")
        },
        resetFirstShow({commit}){
            commit("RESET_FIRSTSHOW")
        },
        login({commit}){
            commit("LOGIN")
        },
        logout({commit}){
            commit("LOGOUT")
        }
    }
}