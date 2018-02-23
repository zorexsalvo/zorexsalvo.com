<template>
  <div>
    <br>
    <div class="timeline is-centered">
      <template v-for="(post, index) in posts">
        <header class="timeline-header"
                v-if="(index > 0 && getYear(posts[index].date_created) !=
                       getYear(posts[index-1].date_created))"
                :key="post.id">
            <span class="tag is-info is-medium">{{ getYear(post.date_created) }}</span>
        </header>

        <div class="timeline-item" :key="post.slug">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">{{ formatDate(post.date_created) }}</p>
            <router-link to="page">{{ post.title }}</router-link>
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
    getYear(date) {
      return moment(date).year();
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
