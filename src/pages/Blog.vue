<template>
  <div>
    <br>
    <div class="timeline is-centered">
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">January 27, 2018</p>
          <p>Self-Hosted Git Server with Gogs</p>
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag is-info is-medium">2017</span>
      </header>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">October 1, 2017</p>
          <p>Pet Projects: How to stay motivated doing it?</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">July 28, 2017</p>
          <p>Vue.js, I choose you!</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">June 21, 2017</p>
          <p>How I Build This Blog?</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">June 17, 2017</p>
          <p>Asynchronous Task with Celery and RabbitMQ</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">May 13, 2017</p>
          <p>Adding Proxy to Your Docker Service</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">April 20, 2017</p>
          <p>AWS Summit Manila 2017</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">March 28, 2017</p>
          <p>Zorex Salvo, Junior Developer</p>
        </div>
      </div>

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
    posts() {
      return this.$store.getters.allPosts;
    },
  },
  created() {
    this.$store.dispatch('getPosts');
  },
};
</script>

<style scoped>
.timeline {
  font-size: 16px !important;
}
</style>
