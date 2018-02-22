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
        <p class="is-size-4 intro">
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
        <h1 class="title">Recent Posts</h1>
        <div class="columns is-gapless post">
          <div class="column">
            <article class="tile is-child notification">
              <p class="title is-size-4">Self-Hosted Git Server with Gogs</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/480x320.png">
              </figure>
            </article>
          </div>

          <div class="column">
            <article class="tile is-child notification">
              <p class="title is-size-4">Pet Projects: How to stay motivated doing it?</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/480x320.png">
              </figure>
            </article>
          </div>

          <div class="column">
            <article class="tile is-child notification">
              <p class="title is-size-4">Vue.js, I choose you!</p>
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

<style scoped>
@media only screen and (min-width: 1200px) {
  .intro {
    margin-top: 3rem;
  }
}
article.tile {
  background-color: #F0F2F4;
}
p.title {
  height: 40px;
}
</style>
