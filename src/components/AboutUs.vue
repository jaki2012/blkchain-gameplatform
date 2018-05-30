<template>
  <div class="aboutus">
    <img src="../assets/dajidali_logo.png"></img>
    <i class="fa fa-copyright"></i>
    <p class="copyright">A gameplatorm supported by Tongji University.</p>
    <p>如果您有任何问题，欢迎随时联系我们的团队 <a href="mailto:ji-gameplatform@gmail.com">ji-gameplatform@gmail.com</a></p>
  </div>
</template>


<script>
export default {
    name:"aboutus",
}
</script>

<style scoped>
  @import url(http://cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min.css);
  .aboutus {
      padding: 4em 0
  }
  i {
      display: inline-block;
      margin-right: 2px;
  }

  p {
      color: #5d5d5d;
  }
  p.copyright {
      display: inline-block;
      margin-bottom: 0;
  }

  a {
      text-decoration: none;
      background: red;
      padding: 0.3em 0.6em 0.3em 0.6em;
      border-radius: 5px;
      color: #fff;
      font-weight: 700;
  }

 
  img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 300px;
      margin-bottom: 2em;
  }
</style>


