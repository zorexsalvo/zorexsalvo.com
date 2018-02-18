<template>
  <div>

    <section class="articles">
      <div class="columns">

        <div class="column is-2 is-offset-1">
          <aside class="menu tag-panel is-hidden-mobile">
            <p class="menu-label">
            Published
            </p>
            <ul class="menu-list">
              <li>
                <ul>
                  <li><a>2018</a></li>
                  <li><a>2017</a></li>
                </ul>
              </li>
            </ul>
            Tags
            </p>
            <ul class="menu-list">
              <li>
                <ul>
                  <li><a>introduction</a></li>
                  <li><a>vue.js</a></li>
                  <li><a>junior developer</a></li>
                </ul>
              </li>
            </ul>

          </aside>
        </div>

        <div class="column is-8">

          <div v-for="post in posts"
               class="card article">

            <div class="card-content card-bg">
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
                      class="tag is-primary is-outlined">
                  {{ tag }}
                </span>
              </div>
              <div class="content article-body is-centered">
                  <p class="has-text-centered">{{ post.short_description }}</p>
              </div>

            </div>
            <a class="button is-light is-fullwidth">
              Read Article
            </a>
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
    posts() {
      return this.$store.getters.allPosts;
    },
  },
  created() {
    this.$store.dispatch('getPosts');
  },
};
</script>
