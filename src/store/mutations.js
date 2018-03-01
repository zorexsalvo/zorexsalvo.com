export default {
  getPosts: (state, payload) => {
    state.posts = payload;
  },
  getPost: (state, payload) => {
    state.post = payload;
  },
};
