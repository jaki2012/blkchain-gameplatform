<template>
  <div id="app">
    <headerbar></headerbar>
    <router-view/>
    <!-- <footerbar></footerbar> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  computed: mapState({ user: state => state.user, app: state => state.app}),
  components: {
    'headerbar': Header,
    'footerbar': Footer
  },
  watch: {
    'app.userLoggedIn': {
      handler: (val, oldVal) => {  
        let unloggedlist = document.querySelectorAll(".mobile-unlogged")
        if (val == true) {
          unloggedlist.forEach(function (value, index, array) {
            value.classList.remove('mobile-unseen')
          })
          document.querySelector(".mobile-logged").classList.add("mobile-unseen")
        } else {
          unloggedlist.forEach(function (value, index, array) {
            value.classList.add('mobile-unseen')
          })
          document.querySelector(".mobile-logged").classList.remove("mobile-unseen")
        }

      },
      // 深度观察
      deep: true
    },
    $route : { //watch 监控路由
      handler: (val) => {
        let pathname = {
          '/home': '首页',
          '/gamelist': '游戏列表',
          '/login': '登录/注册',
          '/aboutus': '关于我们',
          '/historyinfo': '历史记录'
        }
        // 错误路径最后会跳转到首页
        let locationname = "首页"
        if (val.path in pathname){
          locationname = pathname[val.path]
        } else if (val.path.indexOf("/game/") != -1){
          locationname = "游戏"
        }

        document.querySelector("#logolocation p").innerText = locationname;
      }
    }
  },

  mounted(){
    document.querySelector("#logolocation").addEventListener('click', function(){
      swal("您当前所在的页面是" + document.querySelector("#logolocation").innerText + "" )
    })
      skel
        .breakpoints({
          desktop: '(min-width: 737px)',
          tablet: '(min-width: 737px) and (max-width: 1200px)',
          mobile: '(max-width: 736px)'
        })
        .viewport({
          breakpoints: {
            tablet: {
              width: 1080
            }
          }
        });

      var $window = $(window),
        $body = $('body');

      // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function () {
        $body.removeClass('is-loading');
      });

      // Fix: Placeholder polyfill.
      $('form').placeholder();

      // Prioritize "important" elements on mobile.
      skel.on('+mobile -mobile', function () {
        $.prioritize(
          '.important\\28 mobile\\29',
          skel.breakpoint('mobile').active
        );
      });

      // Dropdowns.
      $('#nav > ul').dropotron({
        mode: 'fade',
        noOpenerFade: true,
        alignment: 'center'
      });

      // Off-Canvas Navigation.

      // Title Bar.
      $(
          '<div id="titleBar">' +
          '<a href="#navPanel" class="toggle"></a>' +
          '</div>'
        )
        .appendTo($body);

      // Navigation Panel.
      $(
          '<div id="navPanel">' +
          '<nav>' +
          $('#nav').navList() +
          '</nav>' +
          '</div>'
        )
        .appendTo($body)
        .panel({
          delay: 500,
          hideOnClick: true,
          hideOnSwipe: true,
          resetScroll: true,
          resetForms: true,
          side: 'left',
          target: $body,
          visibleClass: 'navPanel-visible'
        });

      // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
      if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
        $('#titleBar, #navPanel, #page-wrapper')
        .css('transition', 'none');

    let unloggedlist = document.querySelectorAll(".mobile-unlogged")
    if (this.app.userLoggedIn){
      unloggedlist.forEach(function(value, index, array) {
        value.classList.remove('mobile-unseen')
      })
      document.querySelector(".mobile-logged").classList.add("mobile-unseen")
    } else {
      unloggedlist.forEach(function(value, index, array) {
        value.classList.add('mobile-unseen')
      })
      document.querySelector(".mobile-logged").classList.remove("mobile-unseen")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* font-family: 'Open Sans', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

/* Mobile */

	#navPanel, #titleBar {
		display: none;
	}

	@media screen and (max-width: 736px) {

    body{
      margin: 0
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
        background: #252122;
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

        .mobile-unseen {
          display: none!important
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
    }

</style>
