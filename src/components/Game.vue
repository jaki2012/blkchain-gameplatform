<template>
  <div id="pagewrap" class="root">
    <main class="cd-main-content">
      <div class="center">
        <!-- <h1>Ink Transition Effect</h1> -->
        <a href="#0" id="startgame" class="cd-btn cd-modal-trigger">开始游戏</a>
      </div>
    </main>
    <!-- .cd-main-content -->

    <div class="cd-modal container">
        <cointossing class="cointossing"></cointossing>
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
    computed: mapState({ user: state => state.user}),
    components: {
        "cointossing": CoinTossing
    },mounted() {
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

.cd-btn {
    padding: 0.6em 2.2em;
}

.cd-modal div {
    padding-top: 3em;
}
</style>
