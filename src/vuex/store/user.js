import Vue from 'vue'

export const USER_SIGNIN = "USER_SIGNIN";
export const USER_SIGNOUT = "USER_SIGNOUT";

export default {
    state: JSON.parse(localStorage.getItem('user')) || { username: null},
    mutations: {
        [USER_SIGNIN](state, user) {
            localStorage.setItem('playerInfo', JSON.stringify(user))
            localStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        },
        [USER_SIGNOUT](state){
            // 更好的方式是vue整合 或者胡永豪那边判断登录与否
            localStorage.removeItem('user')
            localStorage.removeItem('playerInfo')
            Object.keys(state).forEach(k => Vue.delete(state,k))
        }
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}