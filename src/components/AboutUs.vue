<template>
  <div class="aboutus">
    <img src="../assets/dajidali_logo.png"></img>
    <i class="fa fa-copyright"></i>
    <p class="copyright">A gameplatorm maintained by Tongji University.</p>
    <p class="description">如果您有任何问题，欢迎随时联系我们的团队。 <a href="mailto:ji-gameplatform@gmail.com">ji-gameplatform@gmail.com</a></p>
  </div>
</template>


<script>
export default {
    name:"aboutus",
    mounted() {
        document.querySelector('#nav .current').classList.remove("current")
        document.querySelector('.aboutus-li').classList.add("current")
    }
}
</script>

<style scoped>
  @import url(http://cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min.css);
  .aboutus {
      padding: 4em 0
  }
  i {
      display: inline-block;
      margin-right: -2px;
  }

  p {
      font-weight: 500;
      color: #5d5d5d;
  }
  p.copyright {
      display: inline-block;
      margin-bottom: 0;
  }

  a {
      text-decoration: none;
      background: #d52349;
      padding: 0.3em 0.6em 0.3em 0.6em;
      border-radius: 5px;
      color: #fff;
      font-weight: 700;
  }

 
  img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 250px;
      margin-bottom: 2em;
  }

  @media screen and (max-width: 736px) {
      p a {
          display: block;
          text-align: center;
          margin: 1em 1em;
      }

      .aboutus img {
          margin-top: 1.5em;
          margin-bottom: 0em;
      }

      .aboutus {
          padding: 2em 0;
      }

      .aboutus .description {
          margin-top: 0;
      }
  }
</style>


