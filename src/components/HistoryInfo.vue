<template>
  <div class="demo">
  
    <div class="container1">
      <div class="row">
        <div class="col-md-12">
          <div class="main-timeline">
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
                  <span class="year">Round id {{record.round_id}}</span>
                  <h4 class="title">硬币猜正反</h4>
                  <p class="description">
                  <span>server_seed:</span> {{record.server_seed}}<br>
                  user_seed: {{record.user_seed}}<br>
                  server_seed_txid: {{record.server_seed_txid}}<br>
                  user_seed_txid: {{record.user_seed_txid}}

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
    <div id="loading">
      <div class="card">
        <span class="dots-loader">Loading&#8230;</span>
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
  padding: 4em 0;
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

.description {
  /* keep the layour */
  word-break: break-all;
  word-wrap: break-word;
  font-weight: 500;
  color: #5d5d5d!important;
  font-family: 'Open Sans'
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
      
      .circle img {
        width: 115px;
      }

      .container1 {
        width: 96%;
      }
      .content .description {
        text-align: left
      }
    }

</style>