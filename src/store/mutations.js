export default {
  getPosts: (state, payload) => {
    state.posts = payload;
  },
  setYearHeader: (state, payload) => {
    state.current_year = payload;
    if (state.previou_year !== state.current_year) {
      state.display_current_year = true;
    } else {
      state.display_current_year = false;
    }
    state.previous_year = state.current_year;
  },
};
