<template>
  <div class="demo">
  <router-link to="/gamelist" rel="nofollow">点此进入游戏大厅</router-link>
    <div class="container1">
      
      <div id="loading">
        <div class="card">
          <span class="dots-loader">Loading&#8230;</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div v-if=" history === null || history.length === 0">
            <p v-if="history">您还没有任何历史记录，请马上开始游戏吧~</p>
          </div>
          <div v-else class="main-timeline">
            <template v-for="record in history">
              <div class="timeline">
                <div class="timeline-content">
                  <div class="circle">
                    <span>
                      <img src='../assets/coin_toss.png'> </img>
                      <!-- <i class="fa fa-btc"></i> -->
                    </span>
                  </div>
                  <div class="content">
                    <span class="year">Round ID-{{record.round_id}}</span>
                    <h4 class="title">硬币猜正反</h4>
                    <p class="description">
                      <span>server_seed:</span> {{record.server_seed}}
                      <br>
                      <span>user_seed:</span> {{record.user_seed}}
                      <br>
                      <span>server_seed_txid:</span> {{record.server_seed_txid}}
                      <br>
                      <span>user_seed_txid:</span> {{record.user_seed_txid}}

                    </p>
                    <div class="icon">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
          
        </div>
      </div>

    </div>

  </div>

</template>



<script>
import { mapState } from 'vuex'
export default {
    name: "HistroyInfo",
    computed: mapState({ user: state => state.user }),
    data() {
        return {
            history: null
        }
    },
    mounted() {
        let self = this
        document.querySelector('#nav .current').classList.remove("current")
        document.querySelector('.selfinfo-li').classList.add("current")

        // 为了显示加载效果
        setTimeout(function() {
          self.loadData()
          }, 2000)
    },
    methods: {
      loadData() {
        let self = this
        
        self.$http.get(
          global.HOST + '/cointossing/history?token=' + self.user.token
        ).then((res) => {
          self.history = res.body.body.slice(0, 5)
          document.querySelector('#loading').style.display="none"
          // console.log(self.history.length)
          if (self.history.length === 0) {
            // console.log(document.documentElement.clientHeight)
            // console.log(document.getElementById("footer-wrapper").style.height)
            // 必须是要字符串px 光数字不行
            // document.querySelector('.container1').style.minHeight = (document.documentElement.clientHeight - 228 -194)+ 'px'
            // document.querySelector('.container1').style.Height = '200%'
            // console.log(document.querySelector('.container1').style)
          }
        })
        
      }
    }

}
</script>

<style scoped>

/* @import url(http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css); */
@import url(http://cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min.css);
@import url('../assets/loading/spinners.css');
@import url('../assets/history/css/demo.css');
@import url('../assets/history/css/style.css');

@font-face { 
  font-family:GCTB; /*这里是说明调用来的字体名字*/ 
  src: url(../assets/template/fonts/GauntletClassic_TB.woff.ttf); /*这里是字体文件路径*/ 
} 

@font-face {
  font-family: Asar;
  src: url(../assets/template/fonts/sofia2.ttf)
}

@font-face {
  font-family: Museo;
  src: url(../assets/template/fonts/Museo900-Regular.otf)
}


#loading {
	width: 50%;
	box-sizing: border-box;
	padding: 20px;
  margin-top: 5em;
  margin-left: auto;
  margin-right: auto;
}

.card {
	background: white;
	border: 0px solid #c3c6cf;
	border-radius: 15px;
	text-align: center;
	vertical-align: middle;
}


.demo {
  background: #fff;
  padding: 2em 0;
  font-weight: 500;
}

span.year {
  font-weight: 500;
}

.circle img{
  width: 164px;
}


.container1 {
  width: 76%;
  
  margin-left: auto;
  margin-right: auto;
} 

.demo {
  min-height: 425px;
}

.demo a {
      text-decoration: none;
      background: #d52349;
      padding: 0.3em 0.6em 0.3em 0.6em;
      border-radius: 5px;
      color: #fff;
      font-weight: 700;
}

.description {
  /* keep the layour */
  word-break: break-all;
  word-wrap: break-word;
  font-weight: 500;
  color: #f9b625!important;
  font-family: 'Open Sans';
  font-family: Asar;
}

.description span{
  font-family: Avenir;
  text-transform: uppercase;
  font-weight: 700;
  color: #5d5d5d
}

.description {
  font-size : 1.2em!important;
  color : black;
}

  /* Desktop */
    @media screen and (min-width: 737px) {
      .content {
        /* 180 + 25px = 205px */
        width: calc(100% - 205px);
        width: -moz-calc(100% - 205px);
        width: -webkit-calc(100% - 205px);
      }
    }

  /* Mobile */

    @media screen and (max-width: 736px) {

      #loading {
        margin-top: 8em;
      }
      
      .circle img {
        width: 115px;
      }

      .container1 {
        margin-top: 2em;
        width: 96%;
      }

      .demo {
        width: 86%;
        margin-left: 8%;
      }
      .content .description {
        text-align: left
      }

      /* 永远固定在底部*/ 
      #footer-wrapper {
        bottom: 0px !important;
        position: fixed !important;
        width: 100% !important;
      }
    
    }

</style>