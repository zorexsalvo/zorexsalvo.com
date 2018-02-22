<template>
  <footer class="footer">
    <div class="container">

      <div class="content has-text-centered">
        <a href='https://ko-fi.com/C0C29EP0' target='_blank'><img height='36' style='border:0px;height:30px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
        <a href="https://twitter.com/zorexsalvo?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @zorexsalvo</a>
      </div>

    </div>
  </footer>
</template>

<style scoped>
  .footer {
    margin-top: 1.5rem;
    padding: 3rem 1.5rem 3rem;
  }
</style>

<script>
export default {
  created() {
    const twitterScript = document.createElement('script');
    twitterScript.setAttribute('async', 'true');
    twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    document.head.appendChild(twitterScript);
  },
};
</script>
