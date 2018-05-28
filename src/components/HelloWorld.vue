<template>
  <div id="homevuewrapper">
  <!-- Banner -->
    <section id="banner">
      <header>
        <h2>Howdy. This is Dopetrope.</h2>
        <p>A responsive template by HTML5 UP</p>
      </header>
    </section>
  <!-- Intro -->
    <section id="intro" class="container">
      <div class="row">
        <div class="4u 12u(mobile)">
          <section class="first">
            <i class="icon featured fa-cog"></i>
            <header>
              <h2>Ipsum consequat</h2>
            </header>
            <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
          </section>
        </div>
        <div class="4u 12u(mobile)">
          <section class="middle">
            <i class="icon featured alt fa-flash"></i>
            <header>
              <h2>Magna etiam dolor</h2>
            </header>
            <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
          </section>
        </div>
        <div class="4u 12u(mobile)">
          <section class="last">
            <i class="icon featured alt2 fa-star"></i>
            <header>
              <h2>Tempus adipiscing</h2>
            </header>
            <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
          </section>
        </div>
      </div>
      <footer>
        <ul class="actions">
          <li><a href="#" class="button big">Get Started</a></li>
          <li><a href="#" class="button alt big">Learn More</a></li>
        </ul>
      </footer>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { USER_SIGNOUT} from '../vuex/store/user'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapState({ user: state => state.user}),
  mounted(){
    console.log("Helloworld.vue mounted again")
    console.log(this.user)
    document.querySelector('#nav .current').classList.remove("current")
    document.querySelector('.homepage-li').classList.add("current")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../assets/template/css/font-awesome.min.css");
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
  }
  ol, ul {
		list-style: none;
	}
  #homevuewrapper {
		position: relative;
		background: #ffffff;
		border-bottom: solid 1px #ccc;
	}

  h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
		color: inherit;
		text-decoration: none;
	}

  /* Grid */
    .row {
      border-bottom: solid 1px transparent;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    .row > * {
      float: left;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    .row:after, .row:before {
      content: '';
      display: block;
      clear: both;
      height: 0;
    }

    .row.uniform > * > :first-child {
      margin-top: 0;
    }

    .row.uniform > * > :last-child {
      margin-bottom: 0;
    }

    .row.\30 \25 > * {
      padding: 0 0 0 0px;
    }

    .row.\30 \25 {
      margin: 0 0 -1px 0px;
    }

    .row.uniform.\30 \25 > * {
      padding: 0px 0 0 0px;
    }

    .row.uniform.\30 \25 {
      margin: 0px 0 -1px 0px;
    }

    .row > * {
      padding: 0 0 0 40px;
    }

    .row {
      margin: 0 0 -1px -40px;
    }

    .row.uniform > * {
      padding: 40px 0 0 40px;
    }

    .row.uniform {
      margin: -40px 0 -1px -40px;
    }

    .row.\32 00\25 > * {
      padding: 0 0 0 80px;
    }

    .row.\32 00\25 {
      margin: 0 0 -1px -80px;
    }

    .row.uniform.\32 00\25 > * {
      padding: 80px 0 0 80px;
    }

    .row.uniform.\32 00\25 {
      margin: -80px 0 -1px -80px;
    }

    .row.\31 50\25 > * {
      padding: 0 0 0 60px;
    }

    .row.\31 50\25 {
      margin: 0 0 -1px -60px;
    }

    .row.uniform.\31 50\25 > * {
      padding: 60px 0 0 60px;
    }

    .row.uniform.\31 50\25 {
      margin: -60px 0 -1px -60px;
    }

    .row.\35 0\25 > * {
      padding: 0 0 0 20px;
    }

    .row.\35 0\25 {
      margin: 0 0 -1px -20px;
    }

    .row.uniform.\35 0\25 > * {
      padding: 20px 0 0 20px;
    }

    .row.uniform.\35 0\25 {
      margin: -20px 0 -1px -20px;
    }

    .row.\32 5\25 > * {
      padding: 0 0 0 10px;
    }

    .row.\32 5\25 {
      margin: 0 0 -1px -10px;
    }

    .row.uniform.\32 5\25 > * {
      padding: 10px 0 0 10px;
    }

    .row.uniform.\32 5\25 {
      margin: -10px 0 -1px -10px;
    }

    .\31 2u, .\31 2u\24 {
      width: 100%;
      clear: none;
      margin-left: 0;
    }

    .\31 1u, .\31 1u\24 {
      width: 91.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 0u, .\31 0u\24 {
      width: 83.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\39 u, .\39 u\24 {
      width: 75%;
      clear: none;
      margin-left: 0;
    }

    .\38 u, .\38 u\24 {
      width: 66.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\37 u, .\37 u\24 {
      width: 58.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\36 u, .\36 u\24 {
      width: 50%;
      clear: none;
      margin-left: 0;
    }

    .\35 u, .\35 u\24 {
      width: 41.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\34 u, .\34 u\24 {
      width: 33.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\33 u, .\33 u\24 {
      width: 25%;
      clear: none;
      margin-left: 0;
    }

    .\32 u, .\32 u\24 {
      width: 16.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 u, .\31 u\24 {
      width: 8.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\31 2u\24 + *,
    .\31 1u\24 + *,
    .\31 0u\24 + *,
    .\39 u\24 + *,
    .\38 u\24 + *,
    .\37 u\24 + *,
    .\36 u\24 + *,
    .\35 u\24 + *,
    .\34 u\24 + *,
    .\33 u\24 + *,
    .\32 u\24 + *,
    .\31 u\24 + * {
      clear: left;
    }

    .\-11u {
      margin-left: 91.66667%;
    }

    .\-10u {
      margin-left: 83.33333%;
    }

    .\-9u {
      margin-left: 75%;
    }

    .\-8u {
      margin-left: 66.66667%;
    }

    .\-7u {
      margin-left: 58.33333%;
    }

    .\-6u {
      margin-left: 50%;
    }

    .\-5u {
      margin-left: 41.66667%;
    }

    .\-4u {
      margin-left: 33.33333%;
    }

    .\-3u {
      margin-left: 25%;
    }

    .\-2u {
      margin-left: 16.66667%;
    }

    .\-1u {
      margin-left: 8.33333%;
    }

    @media screen and (min-width: 737px) {

      .row > * {
        padding: 50px 0 0 50px;
      }

      .row {
        margin: -50px 0 -1px -50px;
      }

      .row.uniform > * {
        padding: 50px 0 0 50px;
      }

      .row.uniform {
        margin: -50px 0 -1px -50px;
      }

      .row.\32 00\25 > * {
        padding: 100px 0 0 100px;
      }

      .row.\32 00\25 {
        margin: -100px 0 -1px -100px;
      }

      .row.uniform.\32 00\25 > * {
        padding: 100px 0 0 100px;
      }

      .row.uniform.\32 00\25 {
        margin: -100px 0 -1px -100px;
      }

      .row.\31 50\25 > * {
        padding: 75px 0 0 75px;
      }

      .row.\31 50\25 {
        margin: -75px 0 -1px -75px;
      }

      .row.uniform.\31 50\25 > * {
        padding: 75px 0 0 75px;
      }

      .row.uniform.\31 50\25 {
        margin: -75px 0 -1px -75px;
      }

      .row.\35 0\25 > * {
        padding: 25px 0 0 25px;
      }

      .row.\35 0\25 {
        margin: -25px 0 -1px -25px;
      }

      .row.uniform.\35 0\25 > * {
        padding: 25px 0 0 25px;
      }

      .row.uniform.\35 0\25 {
        margin: -25px 0 -1px -25px;
      }

      .row.\32 5\25 > * {
        padding: 12.5px 0 0 12.5px;
      }

      .row.\32 5\25 {
        margin: -12.5px 0 -1px -12.5px;
      }

      .row.uniform.\32 5\25 > * {
        padding: 12.5px 0 0 12.5px;
      }

      .row.uniform.\32 5\25 {
        margin: -12.5px 0 -1px -12.5px;
      }

      .\31 2u\28desktop\29, .\31 2u\24\28desktop\29 {
        width: 100%;
        clear: none;
        margin-left: 0;
      }

      .\31 1u\28desktop\29, .\31 1u\24\28desktop\29 {
        width: 91.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\31 0u\28desktop\29, .\31 0u\24\28desktop\29 {
        width: 83.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\39 u\28desktop\29, .\39 u\24\28desktop\29 {
        width: 75%;
        clear: none;
        margin-left: 0;
      }

      .\38 u\28desktop\29, .\38 u\24\28desktop\29 {
        width: 66.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\37 u\28desktop\29, .\37 u\24\28desktop\29 {
        width: 58.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\36 u\28desktop\29, .\36 u\24\28desktop\29 {
        width: 50%;
        clear: none;
        margin-left: 0;
      }

      .\35 u\28desktop\29, .\35 u\24\28desktop\29 {
        width: 41.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\34 u\28desktop\29, .\34 u\24\28desktop\29 {
        width: 33.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\33 u\28desktop\29, .\33 u\24\28desktop\29 {
        width: 25%;
        clear: none;
        margin-left: 0;
      }

      .\32 u\28desktop\29, .\32 u\24\28desktop\29 {
        width: 16.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\31 u\28desktop\29, .\31 u\24\28desktop\29 {
        width: 8.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\31 2u\24\28desktop\29 + *,
      .\31 1u\24\28desktop\29 + *,
      .\31 0u\24\28desktop\29 + *,
      .\39 u\24\28desktop\29 + *,
      .\38 u\24\28desktop\29 + *,
      .\37 u\24\28desktop\29 + *,
      .\36 u\24\28desktop\29 + *,
      .\35 u\24\28desktop\29 + *,
      .\34 u\24\28desktop\29 + *,
      .\33 u\24\28desktop\29 + *,
      .\32 u\24\28desktop\29 + *,
      .\31 u\24\28desktop\29 + * {
        clear: left;
      }

      .\-11u\28desktop\29 {
        margin-left: 91.66667%;
      }

      .\-10u\28desktop\29 {
        margin-left: 83.33333%;
      }

      .\-9u\28desktop\29 {
        margin-left: 75%;
      }

      .\-8u\28desktop\29 {
        margin-left: 66.66667%;
      }

      .\-7u\28desktop\29 {
        margin-left: 58.33333%;
      }

      .\-6u\28desktop\29 {
        margin-left: 50%;
      }

      .\-5u\28desktop\29 {
        margin-left: 41.66667%;
      }

      .\-4u\28desktop\29 {
        margin-left: 33.33333%;
      }

      .\-3u\28desktop\29 {
        margin-left: 25%;
      }

      .\-2u\28desktop\29 {
        margin-left: 16.66667%;
      }

      .\-1u\28desktop\29 {
        margin-left: 8.33333%;
      }

    }

    @media screen and (min-width: 737px) and (max-width: 1200px) {

      .row > * {
        padding: 25px 0 0 25px;
      }

      .row {
        margin: -25px 0 -1px -25px;
      }

      .row.uniform > * {
        padding: 25px 0 0 25px;
      }

      .row.uniform {
        margin: -25px 0 -1px -25px;
      }

      .row.\32 00\25 > * {
        padding: 50px 0 0 50px;
      }

      .row.\32 00\25 {
        margin: -50px 0 -1px -50px;
      }

      .row.uniform.\32 00\25 > * {
        padding: 50px 0 0 50px;
      }

      .row.uniform.\32 00\25 {
        margin: -50px 0 -1px -50px;
      }

      .row.\31 50\25 > * {
        padding: 37.5px 0 0 37.5px;
      }

      .row.\31 50\25 {
        margin: -37.5px 0 -1px -37.5px;
      }

      .row.uniform.\31 50\25 > * {
        padding: 37.5px 0 0 37.5px;
      }

      .row.uniform.\31 50\25 {
        margin: -37.5px 0 -1px -37.5px;
      }

      .row.\35 0\25 > * {
        padding: 12.5px 0 0 12.5px;
      }

      .row.\35 0\25 {
        margin: -12.5px 0 -1px -12.5px;
      }

      .row.uniform.\35 0\25 > * {
        padding: 12.5px 0 0 12.5px;
      }

      .row.uniform.\35 0\25 {
        margin: -12.5px 0 -1px -12.5px;
      }

      .row.\32 5\25 > * {
        padding: 6.25px 0 0 6.25px;
      }

      .row.\32 5\25 {
        margin: -6.25px 0 -1px -6.25px;
      }

      .row.uniform.\32 5\25 > * {
        padding: 6.25px 0 0 6.25px;
      }

      .row.uniform.\32 5\25 {
        margin: -6.25px 0 -1px -6.25px;
      }

      .\31 2u\28tablet\29, .\31 2u\24\28tablet\29 {
        width: 100%;
        clear: none;
        margin-left: 0;
      }

      .\31 1u\28tablet\29, .\31 1u\24\28tablet\29 {
        width: 91.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\31 0u\28tablet\29, .\31 0u\24\28tablet\29 {
        width: 83.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\39 u\28tablet\29, .\39 u\24\28tablet\29 {
        width: 75%;
        clear: none;
        margin-left: 0;
      }

      .\38 u\28tablet\29, .\38 u\24\28tablet\29 {
        width: 66.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\37 u\28tablet\29, .\37 u\24\28tablet\29 {
        width: 58.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\36 u\28tablet\29, .\36 u\24\28tablet\29 {
        width: 50%;
        clear: none;
        margin-left: 0;
      }

      .\35 u\28tablet\29, .\35 u\24\28tablet\29 {
        width: 41.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\34 u\28tablet\29, .\34 u\24\28tablet\29 {
        width: 33.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\33 u\28tablet\29, .\33 u\24\28tablet\29 {
        width: 25%;
        clear: none;
        margin-left: 0;
      }

      .\32 u\28tablet\29, .\32 u\24\28tablet\29 {
        width: 16.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\31 u\28tablet\29, .\31 u\24\28tablet\29 {
        width: 8.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\31 2u\24\28tablet\29 + *,
      .\31 1u\24\28tablet\29 + *,
      .\31 0u\24\28tablet\29 + *,
      .\39 u\24\28tablet\29 + *,
      .\38 u\24\28tablet\29 + *,
      .\37 u\24\28tablet\29 + *,
      .\36 u\24\28tablet\29 + *,
      .\35 u\24\28tablet\29 + *,
      .\34 u\24\28tablet\29 + *,
      .\33 u\24\28tablet\29 + *,
      .\32 u\24\28tablet\29 + *,
      .\31 u\24\28tablet\29 + * {
        clear: left;
      }

      .\-11u\28tablet\29 {
        margin-left: 91.66667%;
      }

      .\-10u\28tablet\29 {
        margin-left: 83.33333%;
      }

      .\-9u\28tablet\29 {
        margin-left: 75%;
      }

      .\-8u\28tablet\29 {
        margin-left: 66.66667%;
      }

      .\-7u\28tablet\29 {
        margin-left: 58.33333%;
      }

      .\-6u\28tablet\29 {
        margin-left: 50%;
      }

      .\-5u\28tablet\29 {
        margin-left: 41.66667%;
      }

      .\-4u\28tablet\29 {
        margin-left: 33.33333%;
      }

      .\-3u\28tablet\29 {
        margin-left: 25%;
      }

      .\-2u\28tablet\29 {
        margin-left: 16.66667%;
      }

      .\-1u\28tablet\29 {
        margin-left: 8.33333%;
      }

    }

    @media screen and (max-width: 736px) {

      .row > * {
        padding: 20px 0 0 20px;
      }

      .row {
        margin: -20px 0 -1px -20px;
      }

      .row.uniform > * {
        padding: 20px 0 0 20px;
      }

      .row.uniform {
        margin: -20px 0 -1px -20px;
      }

      .row.\32 00\25 > * {
        padding: 40px 0 0 40px;
      }

      .row.\32 00\25 {
        margin: -40px 0 -1px -40px;
      }

      .row.uniform.\32 00\25 > * {
        padding: 40px 0 0 40px;
      }

      .row.uniform.\32 00\25 {
        margin: -40px 0 -1px -40px;
      }

      .row.\31 50\25 > * {
        padding: 30px 0 0 30px;
      }

      .row.\31 50\25 {
        margin: -30px 0 -1px -30px;
      }

      .row.uniform.\31 50\25 > * {
        padding: 30px 0 0 30px;
      }

      .row.uniform.\31 50\25 {
        margin: -30px 0 -1px -30px;
      }

      .row.\35 0\25 > * {
        padding: 10px 0 0 10px;
      }

      .row.\35 0\25 {
        margin: -10px 0 -1px -10px;
      }

      .row.uniform.\35 0\25 > * {
        padding: 10px 0 0 10px;
      }

      .row.uniform.\35 0\25 {
        margin: -10px 0 -1px -10px;
      }

      .row.\32 5\25 > * {
        padding: 5px 0 0 5px;
      }

      .row.\32 5\25 {
        margin: -5px 0 -1px -5px;
      }

      .row.uniform.\32 5\25 > * {
        padding: 5px 0 0 5px;
      }

      .row.uniform.\32 5\25 {
        margin: -5px 0 -1px -5px;
      }

      .\31 2u\28mobile\29, .\31 2u\24\28mobile\29 {
        width: 100%;
        clear: none;
        margin-left: 0;
      }

      .\31 1u\28mobile\29, .\31 1u\24\28mobile\29 {
        width: 91.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\31 0u\28mobile\29, .\31 0u\24\28mobile\29 {
        width: 83.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\39 u\28mobile\29, .\39 u\24\28mobile\29 {
        width: 75%;
        clear: none;
        margin-left: 0;
      }

      .\38 u\28mobile\29, .\38 u\24\28mobile\29 {
        width: 66.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\37 u\28mobile\29, .\37 u\24\28mobile\29 {
        width: 58.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\36 u\28mobile\29, .\36 u\24\28mobile\29 {
        width: 50%;
        clear: none;
        margin-left: 0;
      }

      .\35 u\28mobile\29, .\35 u\24\28mobile\29 {
        width: 41.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\34 u\28mobile\29, .\34 u\24\28mobile\29 {
        width: 33.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\33 u\28mobile\29, .\33 u\24\28mobile\29 {
        width: 25%;
        clear: none;
        margin-left: 0;
      }

      .\32 u\28mobile\29, .\32 u\24\28mobile\29 {
        width: 16.6666666667%;
        clear: none;
        margin-left: 0;
      }

      .\31 u\28mobile\29, .\31 u\24\28mobile\29 {
        width: 8.3333333333%;
        clear: none;
        margin-left: 0;
      }

      .\31 2u\24\28mobile\29 + *,
      .\31 1u\24\28mobile\29 + *,
      .\31 0u\24\28mobile\29 + *,
      .\39 u\24\28mobile\29 + *,
      .\38 u\24\28mobile\29 + *,
      .\37 u\24\28mobile\29 + *,
      .\36 u\24\28mobile\29 + *,
      .\35 u\24\28mobile\29 + *,
      .\34 u\24\28mobile\29 + *,
      .\33 u\24\28mobile\29 + *,
      .\32 u\24\28mobile\29 + *,
      .\31 u\24\28mobile\29 + * {
        clear: left;
      }

      .\-11u\28mobile\29 {
        margin-left: 91.66667%;
      }

      .\-10u\28mobile\29 {
        margin-left: 83.33333%;
      }

      .\-9u\28mobile\29 {
        margin-left: 75%;
      }

      .\-8u\28mobile\29 {
        margin-left: 66.66667%;
      }

      .\-7u\28mobile\29 {
        margin-left: 58.33333%;
      }

      .\-6u\28mobile\29 {
        margin-left: 50%;
      }

      .\-5u\28mobile\29 {
        margin-left: 41.66667%;
      }

      .\-4u\28mobile\29 {
        margin-left: 33.33333%;
      }

      .\-3u\28mobile\29 {
        margin-left: 25%;
      }

      .\-2u\28mobile\29 {
        margin-left: 16.66667%;
      }

      .\-1u\28mobile\29 {
        margin-left: 8.33333%;
      }

    }

  /* Button */
    input[type="button"],
    input[type="submit"],
    input[type="reset"],
    button,
    .button {
      -webkit-appearance: none;
      display: inline-block;
      text-decoration: none;
      cursor: pointer;
      border: 0;
      border-radius: 5px;
      background: #d52349;
      color: #fff !important;
      font-weight: 700;
      outline: 0;
      -moz-transition: background-color .25s ease-in-out;
      -webkit-transition: background-color .25s ease-in-out;
      -ms-transition: background-color .25s ease-in-out;
      transition: background-color .25s ease-in-out;
    }

    input[type="button"]:hover,
    input[type="submit"]:hover,
    input[type="reset"]:hover,
    button:hover,
    .button:hover {
      background: #e53359;
    }

    input[type="button"]:active,
    input[type="submit"]:active,
    input[type="reset"]:active,
    button:active,
    .button:active {
      background: #c51349;
    }

    input[type="button"].alt,
    input[type="submit"].alt,
    input[type="reset"].alt,
    button.alt,
    .button.alt {
      background: #252122;
    }

    input[type="button"].alt:hover,
    input[type="submit"].alt:hover,
    input[type="reset"].alt:hover,
    button.alt:hover,
    .button.alt:hover {
      background: #353132;
    }

    input[type="button"].alt:active,
    input[type="submit"].alt:active,
    input[type="reset"].alt:active,
    button.alt:active,
    .button.alt:active {
      background: #151112;
    }

    input[type="button"].icon:before,
    input[type="submit"].icon:before,
    input[type="reset"].icon:before,
    button.icon:before,
    .button.icon:before {
      opacity: 0.35;
      position: relative;
      top: 0.05em;
      margin-right: 0.75em;
    }


  /* Icons */
    .icon {
      position: relative;
      text-decoration: none;
    }

    .icon:before {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-family: FontAwesome;
      font-style: normal;
      font-weight: normal;
      text-transform: none !important;
    }

    .icon>.label {
      display: none;
    }

    .icon.featured {
      position: relative;
      display: inline-block;
      background-color: #d52349;
      width: 9em;
      padding: 1.75em 0 0.75em 0;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      margin: 0 0 4.5em 0;
      cursor: default;
    }

    .icon.featured:before {
      font-size: 4.5em;
      line-height: 1em;
      color: #fff;
    }

    .icon.featured:after {
      content: '';
      position: absolute;
      bottom: -1.95em;
      left: 0;
      border-top: solid 2em #d52349;
      border-left: solid 4.5em transparent;
      border-right: solid 4.5em transparent;
    }

    .icon.featured.alt {
      background-color: #252122;
    }

    .icon.featured.alt:after {
      border-top-color: #252122;
    }

    .icon.featured.alt2 {
      background-color: #827a7c;
    }

    .icon.featured.alt2:after {
      border-top-color: #827a7c;
    }



  /* Banner */
    #banner {
      background: #CCE8F4 url("../assets/template/images/pic001.png");
      background-position: center center;
      background-size: auto 100%;
      background-repeat: no-repeat;
      text-align: center;
    }

    #banner header {
      background-color: #252122;
      background-color: rgba(34, 30, 31, 0.98);
    }

      #banner header h2 {
        color: #fff;
        font-weight: 700;
      }

      #banner header p {
        color: #d52349;
        padding: 0;
        font-style: normal;
        margin: 0;
      }

  /* Containers */
    .container {
      margin-left: auto;
      margin-right: auto;
    }

    .container.\31 25\25 {
      width: 100%;
      max-width: 1200px;
      min-width: 960px;
    }

    .container.\37 5\25 {
      width: 720px;
    }

    .container.\35 0\25 {
      width: 480px;
    }

    .container.\32 5\25 {
      width: 240px;
    }

    .container {
      width: 960px;
    }

    @media screen and (min-width: 737px) {

      .container.\31 25\25 {
        width: 100%;
        max-width: 1500px;
        min-width: 1200px;
      }

      .container.\37 5\25 {
        width: 900px;
      }

      .container.\35 0\25 {
        width: 600px;
      }

      .container.\32 5\25 {
        width: 300px;
      }

      .container {
        width: 1200px;
      }

    }

    @media screen and (min-width: 737px) and (max-width: 1200px) {

      .container.\31 25\25 {
        width: 100%;
        max-width: 1200px;
        min-width: 960px;
      }

      .container.\37 5\25 {
        width: 720px;
      }

      .container.\35 0\25 {
        width: 480px;
      }

      .container.\32 5\25 {
        width: 240px;
      }

      .container {
        width: 960px;
      }

    }

    @media screen and (max-width: 736px) {

      .container.\31 25\25 {
        width: 100%;
        max-width: 125%;
        min-width: 100%;
      }

      .container.\37 5\25 {
        width: 75%;
      }

      .container.\35 0\25 {
        width: 50%;
      }

      .container.\32 5\25 {
        width: 25%;
      }

      .container {
        width: 100% !important;
      }

    }
  
  /* Intro */
    #intro {
      text-align: center;
    }

  /* Desktop */
  @media screen and (min-width: 737px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 13pt;
				line-height: 1.75em;
			}

			h2 {
				font-size: 1.5em;
			}

			h3 {
				font-size: 1.35em;
			}

    /* Logo */

      .logoh1 {
        display: inline-block;
      }

      .logoh1 a{
        vertical-align: sub;
      }

      #nav {
        display: inline-block;
      }

		/* Section/Article */

			header {
				margin: 0 0 1.5em 0;
			}

				header > p {
					margin: 0.5em 0 0 0;
					padding-bottom: 0.5em;
				}

				header.major {
					margin: 0 0 3em 0;
				}

			footer {
				margin: 2.25em 0 0 0;
			}

		/* Box */

			.box {
				padding: 2.75em 1.75em 2.75em 1.75em;
			}

				.box .image.featured {
					left: 1.75em;
					top: 1.75em;
					margin: -4.5em 0 4.25em -3.5em;
				}

				.box.post header {
					padding-top: 1em;
					margin: 0 0 2em 0;
				}

				.box.post h2 {
					font-size: 2.5em;
					letter-spacing: -0.015em;
				}

				.box.post header > p {
					margin-top: 1.25em;
					font-size: 1.25em;
				}

		/* Button */

			input[type="button"],
			input[type="submit"],
			input[type="reset"],
			button,
			.button {
				font-size: 1.1em;
				padding: 0.65em 1.5em 0.65em 1.5em;
			}

				input[type="button"].big,
				input[type="submit"].big,
				input[type="reset"].big,
				button.big,
				.button.big {
					font-size: 1.5em;
					padding: 0.75em 1.5em 0.75em 1.5em;
				}

		/* List */

			ul.actions li {
				display: inline-block;
				margin-left: 1em;
			}

				ul.actions li:first-child {
					margin-left: 0;
				}

			ul.links li {
				display: inline-block;
				border-left: solid 1px rgba(255, 255, 255, 0.05);
				padding: 0 0 0 1em;
				margin: 0 0 0 1em;
			}

				ul.links li:first-child {
					border-left: 0;
					padding-left: 0;
					margin-left: 0;
				}

			ul.social {
				margin: 0 0 3.25em 0;
			}

				ul.social li {
					margin-left: 0.75em;
				}

		/* Wrappers */

			#homevuewrapper {
				padding: 0em 0 4em 0;
			}

			#main-wrapper {
				padding: 4em 0 4em 0;
			}

			#footer-wrapper {
				padding: 4em 0 4em 0;
			}

				#footer-wrapper header {
					margin: 0 0 3em 0;
				}

					#footer-wrapper header h2 {
						font-size: 1.75em;
					}

		/* Header */

			#header {
				text-align: center;
			}

				#header h1 {
					color: #252122;
					font-weight: 900;
					font-size: 2.5em;
					letter-spacing: -0.035em;
					margin: 0 1.5em 1em 0;
				}

		/* Nav */

			#nav > ul {
				margin: 0;
			}

				#nav > ul > li {
					display: inline-block;
					font-style: italic;
					margin: 0 0.35em 0 0.35em;
				}

					#nav > ul > li > ul {
						display: none;
					}

					#nav > ul > li > a {
						border-radius: 5px;
						color: #5d5d5d;
						text-decoration: none;
						padding: 0.6em 1.2em 0.6em 1.2em;
						-moz-transition: background-color .25s ease-in-out;
						-webkit-transition: background-color .25s ease-in-out;
						-ms-transition: background-color .25s ease-in-out;
						transition: background-color .25s ease-in-out;
						outline: 0;
					}

					#nav > ul > li:hover > a, #nav > ul > li.active > a {
						background: #f3f3f3;
					}

					#nav > ul > li.current > a {
						background: #d52349;
						color: #fff !important;
						font-weight: 700;
					}

			.dropotron {
				border-radius: 5px;
				background-color: #252122;
				background-color: rgba(34, 30, 31, 0.98);
				padding: 1.25em 1.5em 1.25em 1.5em;
				font-style: italic;
				min-width: 13em;
				box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.5);
				text-align: left;
				margin-top: -1.25em;
				margin-left: -1px;
			}

				.dropotron a, .dropotron span {
					color: #aaa;
					text-decoration: none;
					-moz-transition: color .25s ease-in-out;
					-webkit-transition: color .25s ease-in-out;
					-ms-transition: color .25s ease-in-out;
					transition: color .25s ease-in-out;
				}

				.dropotron li {
					padding: 0.25em 0 0.25em 0;
				}

					.dropotron li:hover > a, .dropotron li:hover > span {
						color: #fff;
					}

				.dropotron.level-0 {
					margin-top: 2em;
				}

					.dropotron.level-0:before {
						content: '';
						display: block;
						position: absolute;
						left: 50%;
						margin-left: -10px;
						top: -9px;
						border-left: solid 10px transparent;
						border-right: solid 10px transparent;
						border-bottom: solid 10px #252122;
						border-bottom-color: rgba(34, 30, 31, 0.98);
					}

		/* Banner */

			#banner {
				position: relative;
				padding: 8em 0;
				margin: 0em 0 0 0;
			}

				#banner header {
					display: inline-block; 
          opacity: 0;
					padding: 2.5em 5em;
					border-radius: 5px;
				}

					#banner header h2 {
						font-size: 2.5em;
						margin: 0 0 0.65em 0;
					}

					#banner header p {
						font-size: 1.5em;
					}

		/* Intro */

			#intro {
				overflow: hidden;
			}

				#intro section {
					margin: 3em 0;
					padding: 2.5em 0;
				}

				#intro h2 {
					font-size: 1.75em;
				}

				#intro p {
					margin: 0;
				}

				#intro .middle {
					position: relative;
					z-index: 1;
				}

					#intro .middle:before {
						content: '';
						width: 32px;
						height: 100%;
						position: absolute;
						left: -24px;
						top: 0;
						display: block;
						z-index: -1;
						box-shadow: 32px 0 0 0 #fff, 0 -32px 0 0 #fff, 0 32px 0 0 #fff, 32px 32px 0 0 #fff, 32px -32px 0 0 #fff, 0 0 32px 0 rgba(0, 0, 0, 0.15);
					}

					#intro .middle:after {
						content: '';
						width: 32px;
						height: 100%;
						position: absolute;
						right: -24px;
						top: 0;
						display: block;
						z-index: -1;
						box-shadow: -32px 0 0 0 #fff, 0 -32px 0 0 #fff, 0 32px 0 0 #fff, -32px 32px 0 0 #fff, -32px -32px 0 0 #fff, 0 0 32px 0 rgba(0, 0, 0, 0.15);
					}

				#intro .button {
					min-width: 11em;
				}

				#intro footer {
					margin: 0;
				}

		/* Copyright */

			#copyright {
				margin: 3em 0 2em 0;
			}

				#copyright .links {
					padding: 0.85em 2.25em 0.85em 2.25em;
				}

	}
</style>
