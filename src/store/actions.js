import axios from 'axios';

const API_BASE = 'https://api.zorexsalvo.com/v1';


export default {
  getPosts: ({ commit }) => {
    axios.get(`${API_BASE}/posts/`).then(
      (response) => {
        commit('getPosts', response.data);
      },
    );
  },
  getPost: ({ commit }, payload) => {
    axios.get(`${API_BASE}/posts/${payload}/`).then(
      (response) => {
        commit('getPost', response.data);
      },
    );
  },
};
