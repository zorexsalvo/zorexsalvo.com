<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <p class="navbar-item">
            <img src="/static/logo.png"
                 alt="Zorex Salvo, developer."
                 style="margin-right: 50px">
          </p>
          <div class="navbar-burger" :class="{ 'is-active': showNav}" @click="toggleNav">
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-start">
            <router-link to="/"
                         class="navbar-item">
              About
            </router-link>
            <router-link to="blog"
                         class="navbar-item">
              Blog
            </router-link>
            <router-link to="/"
                         class="navbar-item">
              Extras
            </router-link>

            <router-link to="archive"
                         class="navbar-item">
              Archive
            </router-link>
            <!--<div class="navbar-item">-->
              <!--<div class="field">-->
                <!--<p class="control has-icons-left">-->
                  <!--<input class="input" placeholder="search@zorexsalvo.com">-->
                  <!--<span class="icon is-small is-left">-->
                    <!--<i class="fa fa-search"></i>-->
                  <!--</span>-->
                <!--</p>-->
              <!--</div>-->
            <!--</div>-->
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
               href="https://twitter.com/zorexsalvo"
               target="_blank">
              <span class="icon">
                <i class="fa fa-twitter fa-lg"></i>
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
          </div>
        </div>
      </div>
    </nav>
    <router-view class="container"/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <a href='https://ko-fi.com/C0C29EP0' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css';
  @import '/assets/css/blog.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import 'https://fonts.googleapis.com/css?family=Open+Sans';
</style>
