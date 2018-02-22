<template>
  <div>
    <br>
    <div class="timeline is-centered">
      <template v-for="post in posts">
        {{ setYearHeader(post.date_created) }}
        <header class="timeline-header" v-if="display_current_year" :key="post.id">
          <span class="tag is-info is-medium">{{ current_year }}</span>
        </header>

        <div class="timeline-item" :key="post.slug">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">{{ formatDate(post.date_created) }}</p>
            <p>{{ post.title }}</p>
          </div>
        </div>
      </template>
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
    setYearHeader(date) {
      this.$store.dispatch('setYearHeader', moment(date).year());
    },
  },
  computed: {
    posts() {
      return this.$store.getters.allPosts;
    },
    display_current_year() {
      return this.$store.getters.getDisplayCurrentYear;
    },
    current_year() {
      return this.$store.getters.getCurrentYear;
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
