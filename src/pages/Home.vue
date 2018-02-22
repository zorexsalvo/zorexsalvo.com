<template>
  <div>
    <div class="notification is-info has-text-centered">
      Site is under construction. Please visit
      <a href="https://zorexsalvo.com">zorexsalvo.com.</a>
    </div>
    <div class="columns">
      <div class="column">
        <figure class="image is-3by2">
            <img src="https://bulma.io/images/placeholders/640x480.png">
        </figure>
      </div>
      <div class="column">
        <p class="is-size-5 intro">
        I code in Python/Django/Flask and lately I've been doing javascript also. I'm not a
        design-guy so I'm usually assigned to do backend stuffs.<br/><br/>I'm in continuous
        loop of learning and experimenting new technologies ergo my ever-presence on many tech
        conferences, hackathons, and codecamps.<br/><br/>I do blogs too. I write about tech,
        hackathon, experiences, events, anything random that comes to mind.<br/><br/>
        </p>
      </div>
    </div>
    <hr style="margin-bottom:0">

    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered has-text-left-desktop">Recent Posts</h1>
        <div class="columns is-gapless post">
          <div class="column"
               v-for="post in recentPosts"
               :key="post.id">
            <article class="tile is-child notification">
              <p class="title is-size-5 has-text-centered has-text-left-tablet">
              {{ post.title }}
              </p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/480x320.png">
              </figure>
            </article>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  computed: {
    recentPosts() {
      const posts = this.$store.getters.allPosts;
      return posts.splice(0, 3);
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
  background-color: #F0F2F4;
}
p.title {
  height: 40px;
}
</style>
