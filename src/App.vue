<template>
  <div id="app">
    <nav class="navbar is-light">
        <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="../">
          root@zorexsalvo~ $
        </a>
      </div>

      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#">
            Home
          </a>
          <a class="navbar-item" href="#">
            Archives
          </a>
          <div class="navbar-item">
            <div class="field">
                <p class="control has-icons-left">
                <input class="input" placeholder="search@zorexsalvo.com">
                <span class="icon is-small is-left">
                    <i class="fa fa-search"></i>
                </span>
                </p>
            </div>
          </div>

        </div>

        <div class="navbar-end">
          <a class="navbar-item" href="https://github.com/zorexsalvo" target="_blank">
            <span class="icon">
              <i class="fa fa-github fa-lg"></i>
            </span>
          </a>
          <a class="navbar-item" href="https://twitter.com/zorexsalvo" target="_blank">
            <span class="icon">
              <i class="fa fa-twitter fa-lg"></i>
            </span>
          </a>
          <a class="navbar-item" href="https://www.linkedin.com/in/zorexsalvo" target="_blank">
            <span class="icon">
              <i class="fa fa-linkedin fa-lg"></i>
            </span>
          </a>
          <a class="navbar-item" href="">
            <span class="icon is-large">
              <i class="fa fa-envelope fa-lg"></i>
            </span>
          </a>
        </div>
</div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css';
  @import '/assets/css/blog.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import 'https://fonts.googleapis.com/css?family=Open+Sans';
</style>
