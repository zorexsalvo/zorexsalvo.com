import axios from 'axios';

const API_BASE = 'http://api.zorexsalvo.com/v1';


export default {
  getPosts: ({ commit }) => {
    axios.get(`${API_BASE}/posts/`).then(
      (response) => {
        commit('getPosts', response.data);
      },
    );
  },
};
