<template>
  <div>
    <div class='container'>
      <header>
        <h1>请选择你想玩的游戏</h1>
        <!-- <p>
        部分游戏正在开发中..
        </p> -->
        <p class="small">
          如果你对游戏的具体玩法或计分方式有疑惑，
          可访问<a href="http://www.cjgammon.com/" target="_blank">游戏介绍</a>
          以获取更多的资讯。
        </p>
      </header>
      <main>
        <div class='items'>
          <div class='item'>
          <router-link to="game" rel="nofollow">
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-0'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                硬币猜正反
              </text>
              <g clip-path='url(#clip-0)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='../assets/game/flip_a_coin.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  硬币猜正反
                </text>
              </g>
            </svg>
          </router-link>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-1'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                剪刀石头布
              </text>
              <g clip-path='url(#clip-1)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='../assets/game/finger_guessing.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  剪刀石头布
                </text>
              </g>
            </svg>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-2'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                幸运大转盘
              </text>
              <g clip-path='url(#clip-2)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='../assets/game/lucky_wheel.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  幸运大转盘
                </text>
              </g>
            </svg>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-3'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                21点
              </text>
              <g clip-path='url(#clip-3)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='../assets/game/black_jack.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  21点
                </text>
              </g>
            </svg>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-4'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                命运之🎲
              </text>
              <g clip-path='url(#clip-4)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='../assets/game/roll_the_dice.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  命运之🎲
                </text>
              </g>
            </svg>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-5'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                猜扑克花色
              </text>
              <g clip-path='url(#clip-5)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='../assets/game/poker_suit_guessing.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  猜扑克花色
                </text>
              </g>
            </svg>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-6'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                The Bride
              </text>
              <g clip-path='url(#clip-6)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-bride.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  The Bride
                </text>
              </g>
            </svg>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-7'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                The Man
              </text>
              <g clip-path='url(#clip-7)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-man.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  The Man
                </text>
              </g>
            </svg>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-8'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                D
              </text>
              <g clip-path='url(#clip-8)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-d.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  D
                </text>
              </g>
            </svg>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-9'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                V
              </text>
              <g clip-path='url(#clip-9)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  V
                </text>
              </g>
            </svg>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-10'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                V II
              </text>
              <g clip-path='url(#clip-10)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v2.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  V II
                </text>
              </g>
            </svg>
          </div>
          <div class='item'>
            <svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 300 200'>
              <defs>
                <clipPath id='clip-11'>
                  <circle cx='0' cy='0' fill='#000' r='150px'></circle>
                </clipPath>
              </defs>
              <text class='svg-text' dy='.3em' x='50%' y='50%'>
                V III
              </text>
              <g clip-path='url(#clip-11)'>
                <image height='100%' preserveAspectRatio='xMinYMin slice' width='100%' xlink:href='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v3.png'></image>
                <text class='svg-masked-text' dy='.3em' x='50%' y='50%'>
                  V III
                </text>
              </g>
            </svg>
          </div>
        </div>
      </main>
    </div>
    <div class='options'>
      <button class='dark'></button>
      <button class='light'></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gamelist',
  mounted() {
    document.querySelector('#nav .current').classList.remove("current")
    document.querySelector('.gamelist-li').classList.add("current")
    var items = [],
      point = document.querySelector('svg').createSVGPoint();

      function getCoordinates(e, svg) {
      point.x = e.clientX;
      point.y = e.clientY;
      return point.matrixTransform(svg.getScreenCTM().inverse());
    }
    function changeColor(e) {
      document.body.className = e.currentTarget.className;
    }
    function Item(config) {
      Object.keys(config).forEach(function (item) {
        this[item] = config[item];
      }, this);
      this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
      this.el.addEventListener('touchmove', this.touchMoveHandler.bind(this));
    }
    
    Item.prototype = {
      update: function update(c) {
        this.clip.setAttribute('cx', c.x);
        this.clip.setAttribute('cy', c.y);
      },
      mouseMoveHandler: function mouseMoveHandler(e) {
        this.update(getCoordinates(e, this.svg));
      },
      touchMoveHandler: function touchMoveHandler(e) {
        e.preventDefault();
        var touch = e.targetTouches[0];
        if (touch) return this.update(getCoordinates(touch, this.svg));
      }
    };

    [].slice.call(document.querySelectorAll('.item'), 0).forEach(function (item, index) {
      items.push(new Item({
        el: item,
        svg: item.querySelector('svg'),
        clip: document.querySelector('#clip-' + index + ' circle'),
      }));
    });


    [].slice.call(document.querySelectorAll('button'), 0).forEach(function (button) {
      button.addEventListener('click', changeColor);
    });
  },
  methods: {
      
  }

}
</script>


<style scoped>
    * {
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 13px;
        font-family: 'Source Sans Pro', sans-serif;
        line-height: 1.618;
        font-weight: 400;
    }

    a {
        color: #1abc89;
    }

    a:hover {
        opacity: .8;
    }

    p {
        font-size: 1.2rem;
        /* color: rgba(245, 245, 245, 0.5); */
    }

    .small {
        font-size: 1rem;
        margin-top: 1em;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    header {
        text-align: center;
        padding-bottom: 3rem;
    }

    h1 {
        font-size: 2.6rem;
        line-height: 1.2em;
        padding-bottom: 1rem;
        font-weight: 600;
    }

    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    circle {
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transition: -webkit-transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: -webkit-transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94), -webkit-transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    text {
        font-size: 1.1rem;
        text-transform: uppercase;
        text-anchor: middle;
        letter-spacing: 1px;
        font-weight: 600;
    }

    .svg-text {
        /*
        fill: #545a64;
        */
        fill: white;
    }

    .svg-masked-text {
        fill: white;
    }

    image {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transition: -webkit-transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: -webkit-transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94), -webkit-transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .items {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        width: 300px;
        height: 200px;
        margin: 5px;
        cursor: pointer;
        background-color: #3b3e46;
        border-radius: 2px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.02), inset 0 0px 0px 1px rgba(0, 0, 0, 0.07);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }

    .item:hover circle,
    .item:hover image {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    button {
        width: 12px;
        height: 12px;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
        border-radius: 1px;
    }

    button.dark {
        background-color: #2f3238;
    }

    button.light {
        background-color: #f9f9f9;
    }

    .options {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    .options button {
        margin-left: .5rem;
    }

    .light {
        background-color: #f9f9f9;
        color: #1a1a1a;
    }

    .light p {
        color: rgba(26, 26, 26, 0.5);
    }

    .light .item {
        background: #f5f5f5;
    }

    .light .svg-text {
        fill: rgba(0, 0, 0, 0.1);
    }


</style>

