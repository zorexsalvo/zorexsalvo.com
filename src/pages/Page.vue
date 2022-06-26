<template>
  <div class="content">
    <h1 class="title is-size-4"><strong>{{ post.title }}</strong></h1>
    <h2 class="subtitle is-size-5">{{ formatDate(post._createdAt) }}</h2>
    <div class="post">
      {{ post.content }}
    </div>

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
  @media only screen and (min-width: 1200px) {
    div.content {
      margin-top: -10px;
      margin-bottom: -10px;
      padding: 50px 20px 250px 100px;
      background-color: white;
      font-size: 18px;
      border-radius: 10px;
    }
  }
  @media only screen and (max-width: 1199px) {
    div.content {
      margin-top: -10px;
      margin-bottom: -10px;
      padding: 50px 20px 100px 10px;
      background-color: white;
      font-size: 18px;
      border-radius: 10px;
    }
  }
  @media only screen and (min-width: 1200px) {
    .cover-image {
      text-align: center;
      margin-left: -40px;
      width: 900px;
    }
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
  @media only screen and (min-width: 1200px) {
    .post {
      margin-right: 90px;
    }
  }
</style>
