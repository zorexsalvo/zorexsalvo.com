<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="container">

      <div class="navbar-brand">
        <p class="navbar-item">
        <img src="/static/logo.png"
             alt="Zorex Salvo, developer.">
        </p>
        <div class="navbar-burger" :class="{ 'is-active': showNav }" @click="showNav = !showNav ">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start" @click="showNav = false">
          <router-link to="/"
                       class="navbar-item">
            Home
          </router-link>
          <router-link :to="{ name: 'Blog' }"
                       class="navbar-item">
            Archive
          </router-link>
        </div>

        <div class="navbar-end">
          <a class="navbar-item"
             href="https://github.com/zorexsalvo"
             target="_blank">
            <span class="icon">
              <i class="fa fa-github fa-lg"></i>
            </span>
          </a>
          <a class="navbar-item"
             href="https://www.linkedin.com/in/zorexsalvo"
             target="_blank">
            <span class="icon">
              <i class="fa fa-linkedin fa-lg"></i>
            </span>
          </a>
          <a class="navbar-item" href="">
            <span class="icon">
              <i class="fa fa-envelope fa-lg"></i>
            </span>
          </a>
          <a href="https://dev.to/zorexsalvo" class="navbar-item">
            <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                 alt="Zorex Salvo's DEV Profile" height="10" />
          </a>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
};
</script>

<style scoped>
  nav {
    margin-bottom: 1.5rem;
  }
  p.navbar-item {
    margin-right: 5px;
  }
</style>
