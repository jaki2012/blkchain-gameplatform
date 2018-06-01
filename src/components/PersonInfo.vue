<template>
  <div class="userinfo-container">
    <div id="loading">
      <div class="card">
        <span class="dots-loader">Loading&#8230;</span>
      </div>
    </div>
    <div v-if="!(userinfo === null)" class="userinfo">
      <h1>您的个人信息如下：</h1>
      <p><span class="userinfo-key">用户名：</span><span class="userinfo-val">{{userinfo.username}}</span></p>
      <p><span class="userinfo-key">金币数量：</span><span class="userinfo-val">{{userinfo.coin}}</span></p>
      <p><span class="userinfo-key">链上记录：</span><span class="userinfo-val">{{userinfo.txid}}</span></p>
    </div>
  </div>
</template>



<script>
import {mapState} from 'vuex'
export default {
    name: "personalinfo",
    data() {
        return {
            userinfo: null
        }
    },
    computed: mapState({
        user: state => state.user
      }),
    mounted() {
        let self = this
        document.querySelector('#nav .current').classList.remove("current")
        document.querySelector('.selfinfo-li').classList.add("current")

        // 为了显示加载效果
        setTimeout(function() {
          self.loadData()
          }, 1000)
        
    },
    methods: {
      loadData() {
        let self = this
        self.$http.get(
          global.HOST + '/userinfo?token=' + self.user.token
        ).then((res) => {
          console.log(res.body)
          self.userinfo = res.body
          
          // 停止转动
          document.querySelector('#loading').style.display="none"
        })
      }
    }

}
</script>

<style scoped>

@import url('../assets/loading/spinners.css');
@import url('../assets/history/css/demo.css');
@import url('../assets/history/css/style.css');

#loading {
  width: 50%;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 5em;
  margin-bottom: 5em;
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

.userinfo-container{
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding-top: 3em;
  padding-bottom: 4em;
}

.userinfo h1 {
    font-size: 1.5em;
    font-weight: 500;
    margin-bottom: 1.4em;
}

.userinfo-container {
  width: 70%;
  min-height: 425px;
  margin-left: auto;
  margin-right: auto;
} 

.userinfo p{
  font-weight: 400;
  padding-left: 12em;
  text-align: left;
  word-wrap: break-word; 
  word-break: normal; 
}

.userinfo-key {
    font-size: 1em;
    font-weight: 500;
}

.userinfo-val {
    font-family: MUSEO;
    font-size: 1.1em;
    font-weight: 100;
    color:#63cdf7
}



/* Mobile */

    @media screen and (max-width: 736px) {
      #loading {
        margin-top: 8em;
      }
      .userinfo-container {
        max-height: 500px;
        overflow: hidden;
      }
      .userinfo-container {
        width: 76%;
        min-height: 425px;
        margin-left: auto;
        margin-right: auto;
      }
      .userinfo h1 {
        font-size: 1.3em;
        font-weight: 500;
        margin-bottom: 1.5em;
      }
      .userinfo p {
        padding-left: 0;
      }
    }



</style>
