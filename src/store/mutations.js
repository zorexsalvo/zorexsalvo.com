export default {
  getPosts: (state, payload) => {
    state.posts = payload.result;
  },
  getPost: (state, payload) => {
    state.post = payload.result[0];
  },
};
