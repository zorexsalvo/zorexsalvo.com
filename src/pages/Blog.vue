<template>
  <div class="body">
    <br>
    <div class="timeline is-centered">
      <template v-for="(post, index) in posts">
        <header class="timeline-header"
                v-if="(index > 0 && getYear(posts[index]._createdAt) !=
                       getYear(posts[index-1]._createdAt))"
                :key="post.id">
            <span class="tag is-info is-medium">{{ getYear(post._createdAt) }}</span>
        </header>

        <div class="timeline-item" :key="post.slug.current">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">{{ formatDate(post._createdAt) }}</p>
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

.body {
  min-height: 80vh;
}
</style>
