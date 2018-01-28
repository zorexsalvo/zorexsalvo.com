<template>
  <div>
    <section class="articles">
      <div class="column is-8 is-offset-2">

          <div class="field">
              <div class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Search@zorexsalvo.com">
                  <span class="icon is-left">
                      <i class="fa fa-search"></i>
                  </span>
                  <span class="icon is-right">
                      <i class="fa fa-check"></i>
                  </span>
              </div>
          </div>
        <div v-for="post in posts"
             class="card article">

          <div class="card-content">
            <div class="media">
              <div class="media-center">
                <img v-bind:src="post.cover_image" class="author-image" alt="Placeholder image">
              </div>

              <div class="media-content has-text-centered">
                  <p class="title article-title">{{ post.title }}</p>
                  <p class="subtitle is-6 article-subtitle">
                  <a href="#">@{{ post.created_by }}</a> on {{ formatDate(post.date_created) }}
                  </p>
              </div>
            </div>
            <div class="has-text-centered">
              <span v-for="tag in post.tags"
                    class="tag is-link">
                {{ tag }}
              </span>
            </div>
            <div class="content article-body is-centered">
                <p class="has-text-centered">{{ post.short_description }}</p>
            </div>

          </div>
          <a class="button is-light is-fullwidth">
            Read More
          </a>
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
    posts() {
      return this.$store.getters.allPosts;
    },
  },
  created() {
    this.$store.dispatch('getPosts');
  },
};
</script>
