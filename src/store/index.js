import Vue from 'vue';
import Vuex from 'vuex';
import PostGetters from './getters';
import PostMutations from './mutations';
import PostActions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  getters: Object.assign({}, PostGetters),
  mutations: Object.assign({}, PostMutations),
  actions: Object.assign({}, PostActions),
});
