<template>
  <div id="header-wrapper">
  <div id="header">
    <!-- Logo -->
	  <img src="../assets/dajidali_logo2.png"></img>
      <h1 class="logoh1" @click="showDescription()" > <router-link to="/" rel="nofollow">大济大利</router-link></h1>
    <!-- Nav -->
      <nav id="nav">
        <ul>
          <li class="homepage-li current"><router-link to="/" rel="nofollow">首页</router-link></li>
          <li class="gamelist-li">
            <router-link to="gamelist" rel="nofollow">游戏列表</router-link>
            <ul>
              <li><a href="#">Lorem ipsum dolor</a></li>
              <li><a href="#">Magna phasellus</a></li>
              <li><a href="#">Etiam dolore nisl</a></li>
              <li>
                <a href="#">Phasellus consequat</a>
                <ul>
                  <li><a href="#">Magna phasellus</a></li>
                  <li><a href="#">Etiam dolore nisl</a></li>
                  <li><a href="#">Veroeros feugiat</a></li>
                  <li><a href="#">Nisl sed aliquam</a></li>
                  <li><a href="#">Dolore adipiscing</a></li>
                </ul>
              </li>
              <li><a href="#">Veroeros feugiat</a></li>
            </ul>
          </li>
          <li><a href="#">游戏介绍</a></li>
          <li><router-link to="/aboutus" rel="nofollow">关于我们</router-link></li>
		  <!-- 用v-show提前加载来防止后面加载dropon.js不生效 -->
          <li v-show="!app.userLoggedIn" class="login-li"><router-link to="login" rel="nofollow">登录/注册</router-link></li>
		  <!-- 查看css可知是-a-->
		  <li v-show="app.userLoggedIn" class="selfinfo-li" ><a href="#">{{user.username}}</a>
			<ul>
			  <li class="dropdown-info"><a href="#"><span style="font-weight: 400;">个人信息</span></a></li>
			  <li class="dropdown-info"><router-link to="/historyinfo" rel="nofollow">历史记录</router-link></li>
			  <li class="dropdown-info"><a href="" @click="logout2">退出登录</a></li>
			</ul>
		  </li>
        </ul>
      </nav>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { USER_SIGNOUT} from '../vuex/store/user'
import swal from 'sweetalert';

export default {
  name: 'Header',
  computed: mapState({ user: state => state.user, app: state => state.app}),
  mounted() {
	  console.log('Header.vue mounted again')
	  console.log(this.app)
  },
  methods:{
	  ...mapActions([USER_SIGNOUT, "logout"]),
	  logout2() {
		  this.USER_SIGNOUT()
		  this.logout()
		  swal("您已成功退出登录！")
		  this.$router.replace({path:'/'})
 	  },
	  showDescription() {
		  let descriptionHead = document.querySelector('#banner header')
		  if (null !== descriptionHead) {
			   document.querySelector('#banner header').style.opacity = 
			   255 - document.querySelector('#banner header').style.opacity;
		  }
		 
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 17.333px;
      font: inherit;
      vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
  }
  ol, ul {
		list-style: none;
  }
  #header-wrapper {
		position: relative;
		background: #ffffff;
		border-bottom: solid 1px #ccc;
  }

  h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
		color: inherit;
		text-decoration: none;
  }

  img {
	  vertical-align: middle;
	  width: 100px
  }

  
  /* Desktop */
  @media screen and (min-width: 737px) {

	img {
	    vertical-align: middle;
	    width: 100px
	  }


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

			#header-wrapper {
				padding: 4.5em 0 0em 0;
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
				font-family: "Source Sans Pro";
				border-radius: 5px;
				background-color: #252122;
				background-color: rgba(34, 30, 31, 0.98);
				padding: 1.25em 1.5em 1.25em 1.5em;
				font-style: italic;
				min-width: 5em;
				line-height: 2em;
				font-size: 17.33px!important;
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
				margin: 4em 0 0 0;
			}

				#banner header {
					display: inline-block;
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
					min-width: 12em;
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
  /* Mobile */

	#navPanel, #titleBar {
		display: none;
	}

	@media screen and (max-width: 736px) {

		/* Basic */

			html, body {
				overflow-x: hidden;
			}

			body, input, textarea, select {
				line-height: 1.75em;
				font-size: 11pt;
				letter-spacing: 0;
			}

			h2, h3, h4, h5, h6 {
				font-size: 1.25em;
			}

		/* Section/Article */

			section, article {
				margin: 0 0 1.5em 0 !important;
			}

			header {
				margin: 0 0 1em 0;
			}

			footer {
				margin: 2em 0 0 0;
			}

		/* Box */

			.box {
				padding: 25px 15px 20px 15px;
			}

				.box .image.featured {
					left: 15px;
					top: 15px;
					margin: -40px 0 40px -30px;
				}

		/* Button */

			input[type="button"],
			input[type="submit"],
			input[type="reset"],
			button,
			.button {
				position: relative;
				padding: 0.65em 0 0.65em 0 !important;
				width: 100%;
				text-align: center;
				font-size: 1.25em;
				margin: 0.25em 0 0.25em 0;
			}

				input[type="button"].icon,
				input[type="submit"].icon,
				input[type="reset"].icon,
				button.icon,
				.button.icon {
					padding-right: 1em !important;
				}

		/* List */

			ul.actions li {
				display: block;
				margin-top: 0.5em;
			}

				ul.actions li:first-child {
					margin-top: 0;
				}

			ul.contact li {
				padding: 0.8em 0 0.8em 7em;
			}

				ul.contact li h3 {
					top: 0.8em;
				}

			ul.divided li {
				padding: 0.5em 0 0.5em 0;
			}

			ul.links li {
				display: block;
				border-top: solid 1px rgba(255, 255, 255, 0.05);
				padding: 0.25em 0 0 0;
				margin: 0.25em 0 0 0;
			}

				ul.links li:first-child {
					border-top: 0;
					padding-top: 0;
					margin-top: 0;
				}

			ul.social li {
				margin: 0 0.5em 0.75em 0;
			}

		/* Off-Canvas Navigation */

			#page-wrapper {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				padding-bottom: 1px;
			}

			#titleBar {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				display: block;
				height: 44px;
				left: 0;
				position: fixed;
				top: 0;
				width: 100%;
				z-index: 10001;
				background: none;
			}

				#titleBar .toggle {
					width: 80px;
					height: 60px;
				}

					#titleBar .toggle:before {
						font-family: FontAwesome;
						text-decoration: none;
						font-style: normal;
						font-weight: normal;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
						content: '\f0c9';
						display: block;
						position: absolute;
						left: 10px;
						top: 10px;
						width: 50px;
						height: 40px;
						line-height: 40px;
						font-size: 18px;
						color: #fff;
						text-align: center;
						background: rgba(150, 150, 150, 0.75);
						border-radius: 5px;
					}

					#titleBar .toggle:active:before {
						background-color: #969696;
					}

			#navPanel {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transform: translateX(-275px);
				-webkit-transform: translateX(-275px);
				-ms-transform: translateX(-275px);
				transform: translateX(-275px);
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				display: block;
				height: 100%;
				left: 0;
				overflow-y: auto;
				position: fixed;
				top: 0;
				width: 275px;
				z-index: 10002;
				color: #858484;
				/* background-image: url("images/bg02.png"); */
				box-shadow: inset -3px 0px 5px 0px rgba(0, 0, 0, 0.35);
			}

				#navPanel .link {
					display: block;
					color: #888;
					text-decoration: none;
					height: 44px;
					line-height: 44px;
					border-top: solid 1px rgba(255, 255, 255, 0.05);
					padding: 0 1em 0 1em;
					font-style: italic;
				}

					#navPanel .link:first-child {
						border-top: 0;
					}

				#navPanel .indent-1 {
					display: inline-block;
					width: 1em;
				}

				#navPanel .indent-2 {
					display: inline-block;
					width: 2em;
				}

				#navPanel .indent-3 {
					display: inline-block;
					width: 3em;
				}

				#navPanel .indent-4 {
					display: inline-block;
					width: 4em;
				}

				#navPanel .indent-5 {
					display: inline-block;
					width: 5em;
				}

				#navPanel .depth-0 {
					color: #fff;
				}

			body.navPanel-visible #page-wrapper {
				-moz-transform: translateX(275px);
				-webkit-transform: translateX(275px);
				-ms-transform: translateX(275px);
				transform: translateX(275px);
			}

			body.navPanel-visible #titleBar {
				-moz-transform: translateX(275px);
				-webkit-transform: translateX(275px);
				-ms-transform: translateX(275px);
				transform: translateX(275px);
			}

			body.navPanel-visible #navPanel {
				-moz-transform: translateX(0);
				-webkit-transform: translateX(0);
				-ms-transform: translateX(0);
				transform: translateX(0);
			}

		/* Wrappers */

			#main-wrapper {
				padding: 2em 10px;
				overflow: hidden;
			}

			#header-wrapper {
				padding: 2em 0;
			}

			#footer-wrapper {
				padding: 2em 25px;
				overflow: hidden;
				-webkit-transform: translateZ(0);
			}

		/* Intro */

			#intro {
				padding: 0 25px 0 25px;
			}

				#intro section {
					position: relative;
					border-top: solid 1px #dfdfdf;
					padding: 2.5em 0 0 0;
					margin: 1.5em 0 0 0 !important;
				}

					#intro section.first {
						border-top: 0;
						padding-top: 0;
					}

					#intro section p {
						margin: 0;
					}

		/* Header */

			#header {
				text-align: center;
			}

				#header h1 {
					color: #252122;
					font-weight: 900;
					font-size: 1.75em;
					letter-spacing: -0.035em;
				}

		/* Nav */

			#nav {
				display: none;
			}

		/* Banner */

			#banner {
				margin: 2em 0 4em 0 !important;
				padding: 6em 0;
			}

				#banner header {
					padding: 1.5em 1em 1.5em 1em;
				}

					#banner header h2 {
						font-size: 1.5em;
						line-height: 1.5em;
						margin: 0 0 0.25em 0;
					}

					#banner header p {
						font-size: 1.2em;
					}

		/* Copyright */

			#copyright {
				margin: 3em 0 0 0;
			}

				#copyright .links {
					padding: 0.75em 1.25em 0.75em 1.25em;
				}

	}
</style>
