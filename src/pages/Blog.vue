<template>
  <div class="body">
    <br>
    <div class="timeline is-centered">
      <template v-for="(post, index) in posts">
        <header class="timeline-header" v-if="(index > 0 && getYear(posts[index].date) !=
          getYear(posts[index - 1].date))" :key="post.id">
          <span class="tag is-info is-medium">{{ getYear(post.date) }}</span>
        </header>

        <div class="timeline-item" :key="post.slug.current">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">{{ formatDate(post.date) }}</p>
            <router-link :to="{ name: 'Page', params: { slug: post.slug.current } }">
              {{ post.title }}
            </router-link>
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
      const posts = this.$store.getters.allPosts;
      return posts.sort((a, b) => (new Date(b.date) - new Date(a.date)));
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

.body {
  min-height: 80vh;
}
</style>
