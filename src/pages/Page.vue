<template>
  <div class="content">
    <h1 class="title is-size-4"><strong>{{ post.title }}</strong></h1>
    <h2 class="subtitle is-size-5">{{ formatDate(post.date_created) }}</h2>
    <img :src="post.cover_image">

  </div>
</template>

<script>
import moment from 'moment';

export default {
  methods: {
    formatDate(date) {
      return moment(date).format('MMMM  DD, YYYY');
    },
  },
  computed: {
    post() {
      return this.$store.getters.getPost;
    },
  },
  created() {
    this.$store.dispatch('getPost', this.$route.params.slug);
  },
};
</script>

<style scoped>
  div.content {
    margin-top: -10px;
    margin-bottom: -10px;
    padding: 50px 20px 250px 100px;
    background-color: white;
    font-size: 18px;
    border-radius: 10px;
  }
  img {
    text-align: center;
    margin-left: -40px;
    width: 900px;
  }
  strong {
    font-weight: bold;
  }
  .subtitle {
    display: block;
    font-size: 14px !important;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
</style>
