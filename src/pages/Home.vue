<template>
  <div>
    <br />
    <div class="columns header">
      <div class="column is-three-fifths is-offset-one-quarter summary">
        <p class="is-size-5 intro">
          I code in <strong>Python / Django / Flask</strong> and lately I've been doing javascript
          as well. I'm not a design-guy so I'm usually assigned to do backend
          stuff.
        </p>
        <p class="is-size-5 intro">
          I'm in continuous loop of learning and experimenting
          new technologies ergo my ever-presence on many tech conferences,
          hackathons, and codecamps.
        </p>
        <p class="is-size-5 intro">
          I do blogs too. I write about
          tech, hackathon, experiences, events, anything random that comes to
          mind.
        </p>
      </div>
    </div>
    <hr style="margin-bottom:0" />

    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered has-text-left-desktop">
          Recent Posts
        </h1>
        <div class="columns is-gapless post">
          <div class="column" v-for="post in recentPosts" :key="post.id">
            <article class="tile is-child notification">
              <div class="has-text-centered has-text-left-tablet">
                {{ formatDate(post.date) }}
              </div>
              <div
                class="title is-size-5 has-text-centered has-text-left-tablet"
              >
                <router-link
                  class="router-title"
                  :to="{ name: 'Page', params: { slug: post.slug.current } }"
                >
                  {{ post.title }}
                </router-link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
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
    recentPosts() {
      const posts = this.$store.getters.allPosts;
      return posts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .splice(0, 3);
    },
  },
  created() {
    this.$store.dispatch('getPosts');
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1200px) {
  .intro {
    margin-top: 1rem;
  }
}

article.tile {
  background-color: #f0f2f4;
}

p.title {
  height: 30px;
}

.router-title {
  text-decoration: none !important;
}

.cover {
  object-fit: cover;
}

article {
  padding: 1.25rem 0.5rem 1.25rem 0.5rem;
}

@media only screen and (max-width: 1000px) {
  .summary {
    margin-left: 8px;
  }
}

.header {
  min-height: 55vh;
  align-items: center;
}

</style>
