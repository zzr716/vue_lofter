import Vue from 'vue'
import Vuex from 'vuex'
// import user from './user'

Vue.use(Vuex)
// 唯一状态树
export default new Vuex.Store ({
    state: {
        navState: 0,
        detailLists: {
            id: 1,
            name : '红鲫鱼',
            headImg : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509184758&di=a72647905d182f7fe864eb39814fbdd3&imgtype=jpg&er=1&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F08%2F4972db13f75df2df2446259945029d0d.jpg',
            img : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509184758&di=a72647905d182f7fe864eb39814fbdd3&imgtype=jpg&er=1&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F08%2F4972db13f75df2df2446259945029d0d.jpg',
            follow : true,
            word : '',
            tag : ['宠物','萌宠','喵星人'],
            comment : {
                hot : 22,
                num : 1,
                users : [{
                    name : "吃葡萄",
                    word : ": 萌萌哒",
                    url : "#"}]
            }
        }
    },
    actions: {
        getDeatil ({commit}, detailLists) {
            commit('saveDetail', detailLists)
        }
    },
    getters: {
        showDetail (state) {
            console.log(state.detailLists)
            // this.$router.push('/detail')
            return state.detailLists
        }
    },
    mutations: {
        saveDetail (state, detailLists) {
            state.detailLists = detailLists
        }
    }
})