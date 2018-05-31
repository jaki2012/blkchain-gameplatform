<template>
  <div id="pagewrap" class="root">
    <main class="cd-main-content">
      <div class="center">
        <h1 class="game-description">{{gameDescription}}</h1>
        <a href="#0" id="startgame" class="cd-btn cd-modal-trigger">开始游戏</a>
      </div>
    </main>
    <!-- .cd-main-content -->

    <div class="cd-modal container">
        <!--组件保留在内存-->
        <component v-bind:is="currentView" keep-alive></component>  
        <!-- .modal-content -->
        <a href="#0" class="modal-close">Close</a>
    </div>

    <div class="cd-transition-layer">
      <div class="bg-layer"></div>
    </div>
    <!-- .cd-transition-layer -->
  </div>

    
</template>

<script>
import { mapState } from 'vuex'
import CoinTossing from './CoinTossing'
export default {
    name: "Game",
    data() {
      return {
        'currentView': this.$route.params.gamename,
        gameDescription: '硬币猜正反的游戏过程非常简单：玩家做出HEAD(正面)或者TAIL(反面)的抉择，并指定一个随机数种子。' + 
        '服务器根据随机数种子算出结果，若玩家的选择与服务器结果相同，则获胜并且获得一定金币结算奖励。'
      }
    },
    computed: mapState({ user: state => state.user}),
    components: {
        "cointossing": CoinTossing
    }, 
    mounted() {
        document.querySelector('#nav .current').classList.remove("current")
        document.querySelector('.gamelist-li').classList.add("current")

        jQuery(document).ready(function ($) {
        //cache some jQuery objects
        var modalTrigger = $('.cd-modal-trigger'),
          transitionLayer = $('.cd-transition-layer'),
          transitionBackground = transitionLayer.children(),
          modalWindow = $('.cd-modal');

        var frameProportion = 1.78, //png frame aspect ratio
          frames = 25, //number of png frames
          resize = false;

        //set transitionBackground dimentions
        setLayerDimensions();
        $(window).on('resize', function () {
          if (!resize) {
            resize = true;
            (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300): window.requestAnimationFrame(setLayerDimensions);
          }
        });

        //open modal window
        modalTrigger.on('click', function (event) {
          event.preventDefault();
          transitionLayer.addClass('visible opening');
          var delay = ($('.no-cssanimations').length > 0) ? 0 : 600;
          setTimeout(function () {
            modalWindow.addClass('visible');
          }, delay);
        });

        //close modal window
        modalWindow.on('click', '.modal-close', function (event) {
          event.preventDefault();
          transitionLayer.addClass('closing');
          modalWindow.removeClass('visible');
          transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
            transitionLayer.removeClass('closing opening visible');
            transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
          });
        });

        function setLayerDimensions() {
          var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;

          if (windowWidth / windowHeight > frameProportion) {
            layerWidth = windowWidth;
            layerHeight = layerWidth / frameProportion;
          } else {
            layerHeight = windowHeight * 1.2;
            layerWidth = layerHeight * frameProportion;
          }

          transitionBackground.css({
            'width': layerWidth * frames + 'px',
            'height': layerHeight + 'px',
          });

          resize = false;
        }
      });
    }
}
</script>


<style scoped>
@import '../assets/transition-svg/css/style.css';
@import '../assets/transition-svg/css/reset.css';

.game-description {
  color: #8e6a35;
  font-family: Museo;
  width: 20%;
  text-align: left;
  margin-top: -3em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5em;
}

.cd-btn {
    padding: 0.4em 2em;
}

.cd-modal div {
    padding-top: 3em;
}

@media screen and (max-width: 736px) {
  .game-description {
  width: 60%;
  margin-top: -8em;
  }
}
</style>
