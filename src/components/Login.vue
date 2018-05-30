<template>
  <div>
    <!-- <p class="tip">大济大利@GAME PLATFORM DEMO</p> -->
    <p class="tip">  <p>
    <div class="cont">
      <div class="form sign-in">
        <h2>欢迎回来,</h2>
        <label>
          <span>用户名</span>
          <input v-model="loginUserName" type="text" />
        </label>
        <label>
          <span>登录密码</span>
          <input v-model="loginPassword" type="password" />
        </label>
        <p class="forgot-pass">忘记密码?</p>

        <button type="button" @click="Login()" id="btnActivation" class="btn btn--activate submit">
          <span class="btn__icon"></span>
           <span class="btn__text" data-wait="正在登录" data-after="登录成功">开始登录</span>
        </button>
        <button type="button" class="fb-btn">授权
         <i class="fa fa-wechat wechat-icon"></i><span>Wechat</span> 登录
        </button>
      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h2>第一次来到这？</h2>
            <p>马上注册您的账户并尝试发现来自这里的无穷乐趣！</p>
          </div>
          <div class="img__text m--in">
            <h2>我们中的一员？</h2>
            <p>如果您已经有账户，请登录。</p>
            <p>我们想念你！</p>
          </div>
          <div class="img__btn">
            <span class="m--up">注册</span>
            <span class="m--in">登录</span>
          </div>
        </div>
        <div class="form sign-up">
          <h2>是时候开始你的探索了,</h2>
          <label>
            <span>用户昵称</span>
            <input v-model="registerName" type="text" />
          </label>
          <label>
            <span>邮件</span>
            <input type="email" />
          </label>
          <label>
            <span>登录密码</span>
            <input v-model="registerPassword" type="password" />
          </label>
          <!-- 绑click的元素要对-->
          <button type="button" @click="Register()" id="btnActivation2" class="btn btn--activate submit">
            <span class="btn__icon"></span>
            <span class="btn__text" data-wait="正在注册" data-after="注册成功">开始注册</span>
          </button>
          <button type="button" class="fb-btn">使用
            <span>微信</span> 注册
          </button>
        </div>
      </div>
    </div>

    <a href="https://dribbble.com/shots/3306190-Login-Registration-form" target="_blank" class="icon-link">
      <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png">
    </a>
    <a href="https://twitter.com/NikolayTalanov" target="_blank" class="icon-link icon-link--twitter">
      <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png">
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '../vuex/store/user'
import swal from 'sweetalert';
export default {
  name: 'Login',
  data() {
    return {
      loginUserName: null,
      loginPassword: null,
      registerName: null,
      registerPassword: null,
      userdata: ''
    }
  },
  mounted: function(){
    console.log(this.$store)
    document.querySelector('.img__btn').addEventListener('click', function () {
      document.querySelector('.cont').classList.toggle('s--signup');
    });

    document.querySelector('#nav .current').classList.remove("current")
    document.querySelector('.login-li').classList.add("current")

    $(document).ready(function () {
      $('#btnActivation').click(function () {
        if (!$('#btnActivation').hasClass(('btn--activated'))) {
          $('#btnActivation').removeClass('btn--activate');
          $('#btnActivation').addClass('btn--waiting');
          // setTimeout(function () {
          //   removeWaiting();
          // }, 3000);
        }
      });
      // 注册按钮部分
      $('#btnActivation2').click(function () {
        if (!$('#btnActivation2').hasClass(('btn--activated'))) {
          $('#btnActivation2').removeClass('btn--activate');
          $('#btnActivation2').addClass('btn--waiting');
          // setTimeout(function () {
          //   removeWaiting2();
          // }, 3000);
        }
      });

    });

  
  function removeWaiting(){
      $('#btnActivation').removeClass('btn--waiting');
      $('#btnActivation').addClass('btn--activated');
  }

  function removeWaiting2(){
      $('#btnActivation2').removeClass('btn--waiting');
      $('#btnActivation2').addClass('btn--activated');
  }

  },
  methods: {
    ...mapActions([USER_SIGNIN,"enterLoginPage","leaveLoginPage","login"]),
    Register() {
      console.log("registering")
      this.$http.get(
        global.HOST + '/reg?username=' + this.registerName + '&password=' + this.loginPassword,
        // {
        //   username: this.registerName,
        //   password: this.registerPassword
        // }
      ).then((res) => {
        console.log(res)
        $('#btnActivation2').removeClass('btn--waiting');
        $('#btnActivation2').addClass('btn--activated');
      })
    },
    Login() {
      // hold the vue context
      let self = this
      this.$http.get(
        global.HOST + '/login?username=' + this.loginUserName + '&password=' + this.loginPassword,
      ).then((res) => {
        console.log(res.body)
        // login succesfully
        if(res.body.error == 0) {
          $('#btnActivation').removeClass('btn--waiting');
          $('#btnActivation').addClass('btn--activated');
          self.userdata = res.body
          self.login()
          // 必须先login再跳转
          self.JumpToHomepage()
          
        } else {
          //login failed处理
          swal("登录失败","请检查登录用户名及密码是否正确","error",{
            buttons: "确定",
          })
          $('#btnActivation').removeClass('btn--waiting');
          $('#btnActivation').addClass('btn--activate');
        }
        
      })
    },
    JumpToHomepage(){
      let self = this
      this.USER_SIGNIN(this.userdata)
      setTimeout(function(){
        self.$router.replace({path: '/'})
      }, 1000)
      
    }
  }
}
</script>


<style lang="scss" scoped>
@import url("../assets/template/css/font-awesome.min.css");
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Avenir', 'Open Sans', Helvetica, Arial, sans-serif;
  background: #ededed;
}

input, button {
  border: none;
  outline: none;
  background: none;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

$contW: 900px;
$imgW: 260px;
$formW: $contW - $imgW;
$switchAT: 1.2s;

$inputW: 260px;
$btnH: 36px;

$diffRatio: ($contW - $imgW) / $contW;

@mixin signUpActive {
  .cont.s--signup & {
    @content;
  }
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.cont {
  overflow: hidden;
  position: relative;
  width: $contW;
  height: 550px;
  margin: 0 auto 100px;
  background: #fff;
}

.form {
  position: relative;
  width: $formW;
  height: 100%;
  transition: transform $switchAT ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: $formW;
  top: 0;
  width: $contW;
  height: 100%;
  padding-left: $imgW;
  background: #fff;
  transition: transform $switchAT ease-in-out;

  @include signUpActive {
    transform: translate3d($formW * -1,0,0);
  }
}

button {
  display: block;
  margin: 0 auto;
  width: $inputW;
  height: $btnH;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: $imgW;
  height: 100%;
  padding-top: 360px;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: $contW;
    height: 100%;
    background-image: url('../assets/template/images/pic001.png');
    background-size: cover;
    transition: transform $switchAT ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }

  @include signUpActive {
    &:before {
      transform: translate3d($formW,0,0);
    }
  }

  &__text {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
    transition: transform $switchAT ease-in-out;

    h2 {
      margin-bottom: 10px;
      font-weight: normal;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }

    &.m--up {

      @include signUpActive {
        transform: translateX($imgW*2);
      }
    }

    &.m--in {
      transform: translateX($imgW * -2);

      @include signUpActive {
        transform: translateX(0);
      }
    }
  }

  &__btn {
    overflow: hidden;
    z-index: 2;
    position: relative;
    width: 100px;
    height: $btnH;
    margin: 0 auto;
    background: transparent;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    
    &:after {
      content: '';
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 30px;
    }

    span {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform $switchAT;
      
      &.m--in {
        transform: translateY($btnH*-2);
        
        @include signUpActive {
          transform: translateY(0);
        }
      }
      
      &.m--up {
        @include signUpActive {
          transform: translateY($btnH*2);
        }
      }
    }
  }
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: $inputW;
  margin: 25px auto 0;
  text-align: center;

  span {
    font-size: 12px;
    color: #727272;
    text-transform: uppercase;
  }
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  text-align: center;
}

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #727272;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #d4af7a;
  text-transform: uppercase;
}

.wechat-icon {
  margin-right: 0.1em;
  color: #62b900;
}

.fb-btn {
  border: 2px solid #d3dae9;
  color: darken(#d3dae9, 20%);

  span {
    font-weight: bold;
    color: darken(#768cb6, 20%);
  }
}

.sign-in {
  transition-timing-function: ease-out;

  @include signUpActive {
    transition-timing-function: ease-in-out;
    transition-duration: $switchAT;
    transform: translate3d($formW,0,0);
  }
}

.sign-up {
  transform: translate3d($contW * -1,0,0);

  @include signUpActive {
    transform: translate3d(0,0,0);
  }
}

.icon-link {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 32px;

  img {
    width: 100%;
    vertical-align: top;
  }

  &--twitter {
    left: auto;
    right: 5px;
  }
}

/*
  LoginButton
 */

  .block{
      display: table;
      height: 100%;
      width:100%;
      margin: 0;
      padding: 0;
      text-align: center;
      font-family: 'Roboto', sans-serif;
  }

  .block__cell{
      padding-left: 200px;
      padding-top: 200px;
      display: table-cell;
      vertical-align: middle;
  }

  .btn{
      line-height: 36px;
      text-decoration: none;  
      position: relative;
      text-align: center;
      display: inline-block;
      background-color: #319bef;
      color: #fff;
      border-radius: 23px;
      font-size: 15px;
      transition:  all 0.5s linear;
      -o-transition:  all 0.5s linear;
      -webkit-transition: all 0.5s linear;
      -moz-transition: all 0.5s ease;
    overflow: hidden;
  }

  .btn__icon{
      width: 24px;
      height: 24px;
      background-color: #fff;
      border: 0px solid #319bef;
      border-radius: 50%;
      display: inline-block;
      top: 6px;
      position: absolute;
      left: 20px;


  }
  .btn .btn__icon:before{
      content: '';
      left:0px;
      top:0px;
      position: absolute;
      transition:  all 0.3s linear;
      -o-transition:  all 0.3s linear;
      -webkit-transition: all 0.3s linear;
      -moz-transition: all 0.3s ease;
  }

  .btn--activate .btn__icon:before{
      width: 24px;
      height: 24px;
      background-image: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI2OC44MzEgMjY4LjgzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjY4LjgzMSAyNjguODMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTIyMy4yNTUsODMuNjU5bC04MC03OS45OThjLTQuODgxLTQuODgxLTEyLjc5Ny00Ljg4MS0xNy42NzgsMGwtODAsODBjLTQuODgzLDQuODgyLTQuODgzLDEyLjc5NiwwLDE3LjY3OCAgIGMyLjQzOSwyLjQ0LDUuNjQsMy42NjEsOC44MzksMy42NjFzNi4zOTctMS4yMjEsOC44MzktMy42NjFsNTguNjYxLTU4LjY2MXYyMTMuNjU0YzAsNi45MDMsNS41OTcsMTIuNSwxMi41LDEyLjUgICBjNi45MDEsMCwxMi41LTUuNTk3LDEyLjUtMTIuNVY0Mi42NzdsNTguNjYxLDU4LjY1OWM0Ljg4Myw0Ljg4MSwxMi43OTcsNC44ODEsMTcuNjc4LDAgICBDMjI4LjEzNyw5Ni40NTUsMjI4LjEzNyw4OC41NDEsMjIzLjI1NSw4My42NTl6IiBmaWxsPSIjMzE5YmVmIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==');
      background-repeat: no-repeat;
      background-size: 10px;
      background-position-x: center;
      background-position-y: center;

  }

  .btn .btn__icon:after{
      content: '';
      top: 0px;
      left: 0px;
      position: absolute;
      transition:  all 0.3s linear;
      -o-transition:  all 0.3s linear;
      -webkit-transition: all 0.3s linear;
      -moz-transition: all 0.3s linear;
  }

  .btn--activate .btn__icon:after{
    width: 24px;
    height: 24px;
    background-image: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI2IDI2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNiAyNiIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CiAgPHBhdGggZD0ibS4zLDE0Yy0wLjItMC4yLTAuMy0wLjUtMC4zLTAuN3MwLjEtMC41IDAuMy0wLjdsMS40LTEuNGMwLjQtMC40IDEtMC40IDEuNCwwbC4xLC4xIDUuNSw1LjljMC4yLDAuMiAwLjUsMC4yIDAuNywwbDEzLjQtMTMuOWgwLjF2LTguODgxNzhlLTE2YzAuNC0wLjQgMS0wLjQgMS40LDBsMS40LDEuNGMwLjQsMC40IDAuNCwxIDAsMS40bDAsMC0xNiwxNi42Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuMy0wLjMsMC0wLjUtMC4xLTAuNy0wLjNsLTcuOC04LjQtLjItLjN6IiBmaWxsPSIjMmY4OWQxIi8+Cjwvc3ZnPgo=');
      background-repeat: no-repeat;
      background-size: 8px;
      background-position-x: center;
      background-position-y: 34px;
  }

  .btn--activate:hover{
      background-color: #2f89d1;
  }

  .btn--activate:hover .btn__icon{
      border-color: #2f89d1;
  }

  .btn--activate:hover .btn__icon:before{
      background-position-y: -34px;
  }

  .btn--activate:hover .btn__icon:after{
      background-position-y: center;
  }

  .btn--waiting{
    background-color: #2f89d1;
  }

  .btn--waiting .btn__icon{
  background-color: transparent;
  }

  /*.btn--waiting .btn__icon:before{
    width:20px;
    height:20px;
    top: 2px;
    left: 2px;
    border-radius:50%;
    background-color:#2f89d1;
    z-index: 1;
  }*/

  .btn--waiting .btn__icon:after{
    width:20px;
    height:20px;
    top: 0px;
    left: 0px;
    border-radius:50%;
    animation:rotation infinite linear 0.5s;
    transition:none;
    border-top: 2px solid transparent;
    border-left: 2px solid #fff;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    z-index: 0;
  }


  .btn--activated {
    background-color: #44cc71;
  }

  .btn--activated .btn__icon:after{
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI2IDI2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNiAyNiIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CiAgPHBhdGggZD0ibS4zLDE0Yy0wLjItMC4yLTAuMy0wLjUtMC4zLTAuN3MwLjEtMC41IDAuMy0wLjdsMS40LTEuNGMwLjQtMC40IDEtMC40IDEuNCwwbC4xLC4xIDUuNSw1LjljMC4yLDAuMiAwLjUsMC4yIDAuNywwbDEzLjQtMTMuOWgwLjF2LTguODgxNzhlLTE2YzAuNC0wLjQgMS0wLjQgMS40LDBsMS40LDEuNGMwLjQsMC40IDAuNCwxIDAsMS40bDAsMC0xNiwxNi42Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuMy0wLjMsMC0wLjUtMC4xLTAuNy0wLjNsLTcuOC04LjQtLjItLjN6IiBmaWxsPSIjNDRjYzcxIi8+Cjwvc3ZnPgo=);
  width: 24px;
  height: 24px;
  background-size: 10px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
    animation: activated 0.3s linear 1;
  }

  .btn__text{
  position: relative;

  }

  .btn__text:before{
  content: attr(data-after);
  position: absolute;
  top: -27px;
    color: transparent;
  z-index: -1;
    color: #fff;
          transition:  all 0.2s linear;
      -o-transition:  all 0.2s linear;
      -webkit-transition: all 0.2s linear;
      -moz-transition: all 0.2s linear;
      /** 解决中文问题.. */
      white-space:nowrap;
  }

  .btn__text:after{
      line-height: 46px;
  content: attr(data-wait);
  position: absolute;
    color: transparent;
  top: 2px;
    left: 0;
  z-index: -1;
    color: #fff;
          transition:  all 0.2s linear;
      -o-transition:  all 0.2s linear;
      -webkit-transition: all 0.2s linear;
      -moz-transition: all 0.2s linear;
  }

  .btn--waiting .btn__text{
    color: transparent;
  }

  .btn--waiting .btn__text:after{
  top: -13px;
  z-index: 1;
  }

  .btn--activated .btn__text:before{
  top: -9px;
  z-index: 1;
  }

  .btn--activated .btn__text{
    color: transparent;
  }

  @keyframes rotation {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  @keyframes activated {
    0% {
      background-position-y: 34px;
    }
    100% {
      background-position-y: center;
    }
  }

</style>

