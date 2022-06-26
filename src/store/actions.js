import axios from 'axios';

const PROJECT_ID = 'tib306pj';
const DATASET = 'production';
const API_BASE = `https://${PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${DATASET}`;


export default {
  getPosts: ({ commit }) => {
    const QUERY = encodeURIComponent('*[_type == "post"]');
    axios.get(`${API_BASE}?query=${QUERY}`).then(
      (response) => {
        commit('getPosts', response.data);
      },
    );
  },
  getPost: ({ commit }, payload) => {
    const QUERY = encodeURIComponent(`*[_type == "post" && slug.current == "${payload}"]`);
    axios.get(`${API_BASE}?query=${QUERY}`).then(
      (response) => {
        commit('getPost', response.data);
      },
    );
  },
};
