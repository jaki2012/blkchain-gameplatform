<template>
  <div>
    <!-- <p class="tip">大济大利@GAME PLATFORM DEMO</p> -->
    <p class="tip">  <p>
    <div class="cont">
      <div class="form sign-in">
        <h2>欢迎回来,</h2>
        <label>
          <span>电子邮件</span>
          <input type="email" />
        </label>
        <label>
          <span>登录密码</span>
          <input type="password" />
        </label>
        <p class="forgot-pass">忘记密码?</p>
        <button type="button" class="submit">登录</button>
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
            <input type="text" />
          </label>
          <label>
            <span>邮件</span>
            <input type="email" />
          </label>
          <label>
            <span>登录密码</span>
            <input type="password" />
          </label>
          <button type="button" class="submit">注册</button>
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
export default {
  name: 'Login',
  mounted: function(){
    document.querySelector('.img__btn').addEventListener('click', function () {
      document.querySelector('.cont').classList.toggle('s--signup');
    });

    document.querySelector('#nav .current').classList.remove("current")
    document.querySelector('.login-li').classList.add("current")
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

.submit:hover {
  /*鼠标悬浮效果*/
  /*阴影*/
  box-shadow: 2px 2px 2px grey;
  /*发光*/
  background-color: #d4af7b;
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
</style>

