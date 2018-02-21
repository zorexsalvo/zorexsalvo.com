<template>
  <div id="app">
    <navigation></navigation>
    <router-view class="container"/>
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
import Navigation from './components/navigation';


export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css';
  @import '/assets/css/blog.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import 'https://fonts.googleapis.com/css?family=Open+Sans';
</style>
