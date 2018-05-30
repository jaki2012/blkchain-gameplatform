<template>
  <div id="cointossing">
      <h1 class="title">Coin Tossing Guesser</h1>
      <div class="box">
        <div class="left-container">
          <div class="option">{{topping}}</div>
          <div class="option-container">
            <transition name="bounce">
              <div v-if="showHead" class="choice-preview">
                <div>
                  <p class="preview-text"> Head </p>
                </div>

              </div>
            </transition>
            <transition name="bounce">
              <div v-if="showTail" class="choice-preview">
                <div>
                  <p class="preview-text"> Tail </p>
                </div>
              </div>
            </transition>
            <div class="plus">
              <p>+</p>
            </div>
            <div class="random-seed">
              <input v-model="userSeed" placeholder="your seed?">
            </div>

            <transition name="bounce">
              <div v-if="showMozWedge" class="moz-wedge">
              </div>
            </transition>
            <transition name="bounce">
              <div v-if="showPepOption" class="pep-option">
              </div>
            </transition>
          </div>
          <div v-if="buttonsOn" @click="processTopping(1)" class="yes-button">{{yesButton}}</div>
          <div v-if="buttonsOn" @click="processTopping(2)" class="no-button">{{noButton}}</div>
        </div>
        <div class="right-container">
          <div class="option">
            <span id="white">{{totalPrice}}</span>
          </div>
          <div class="pizza-div" id="coin">
            <div class="side-a"></div>
            <div class="side-b"></div>
          </div>

          <div class="totalButton">
            <div v-if="buttonsOn" @click="tossCoin()" class="flip-button">{{flipButton}}</div>
          </div>
        </div>
      </div>

      <div id="loader" class="pageload-overlay" data-opening="M 40 -21.875 C 11.356078 -21.875 -11.875 1.3560784 -11.875 30 C -11.875 58.643922 11.356078 81.875 40 81.875 C 68.643922 81.875 91.875 58.643922 91.875 30 C 91.875 1.3560784 68.643922 -21.875 40 -21.875 Z">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="xMidYMid slice">
          <path d="M40,30 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 Z" />
        </svg>
      </div>
      <!-- /pageload-overlay -->


  </div>
</template>



<script>
  import { mapState } from 'vuex'
  import { sha256 } from 'js-sha256'
  import swal from 'sweetalert';
  export default {
    data() {
      return {
        stage: 1,
        yesButton: "Head",
        noButton: "Tail",
        topping: "Your choice?",
        crustOn: true,
        sauceOn: false,
        stringCheeseOn: false,
        wedgeCheeseOn: false,
        meatOn: false,
        showHead: true,
        showTail: false,
        showShreddedCheese: false,
        showMozWedge: false,
        showPepOption: false,
        currentPrice: 0,
        totalPrice: "Result",
        prices: [2, 2, 3, 3, 3],
        crustClass: "pizza",
        buttonsOn: true,
        count: 0,
        flipButton: "Flip It!",
        userSeed: null,
        flipping: false,
        flipped: false,
        serverSeedHash: null,
        serverSeedTxid: null,
        serverSeed: null,
        // 服务器返回的最终结果
        finalResult: null
      }
    },
    computed: mapState({ user: state => state.user}),
    mounted: function () {
      // 保留vue自身的context
      let self = this
      
      // 点击开始游戏的时候自动加载
      document.querySelector('#startgame').addEventListener('click', function(){
        self.beginNewRound();
      })

      console.log("CoinTossing mounted.")
      document.querySelector('#coin').addEventListener('animationend', function () {
        
        self.flipping = false
        self.flipButton = "Flip It!"
        console.log("animationend")
        let bingo = false
        if (self.showHead && self.finalResult === 1) {
          bingo = true
        } else if (self.showTail && self.finalResult === 0){
          bingo = true
        }
        let bingoText = bingo? "恭喜您猜中了结果！": "很遗憾您没有猜中结果.."
        let iconType = bingo? "success" : "info"
        console.log(bingoText)
        let content = '服务器随机数hash: <span style="color:red">' + self.serverSeedHash.substr(0, 12) + '</span></br>' +
              '服务器随机数: <span style="color:red">' + self.serverSeed + '</span></br>' +
              'sha256(' + self.serverSeed + ') == <span style="color:red">' + self.serverSeedHash.substr(0, 12) + '</span></br>' +
              '你的随机数: <span style="color:red">' + self.userSeed + '</span></br>' +
              '(' + self.userSeed + ' & ' + self.serverSeed + ') & 1 = ' + self.finalResult
        var div = document.createElement('div')
        div.innerHTML = content
        // div.classList.add("sweet-alert")
        swal({
          title: bingoText,
          // 多到官网看最新的api文档
          closeOnClickOutside: false,
          content: {
            element: div,
            attributes: {
              class: "sweet-alert"
            }
          },
          icon: iconType,
          buttons: {
            playagain: {
              text: "再玩一次",
              value: "playagain",
              visible: true,
              className: "",
              closeModal: false
            },
            confirm: {
              text: "保存返回",
              value: "confirm",
              visible: true,
              className: "",
              closeModal: false,
            },
          },
          // timer: 5000,
        }).then((value) => {
          
          if (self.finalResult === 1) {
            document.querySelector('#coin').classList.remove("heads2")
          } else{
            document.querySelector('#coin').classList.remove("tails")
          }
          
          switch (value) {
            case "playagain":
              self.saveResult(1)
              break
            // 判定对最后的结果是否已经记录完成， 这个是显示完判定流程界面后，不断向后台轮询(1-2s)是否已经记录完成
            case "confirm":
              self.saveResult(0)
              break;
            default:
              break;
          };
        });

      })
      document.querySelector('#coin').addEventListener('animationiteration', function () {
        console.log("animationiteration plus one")
        self.count = self.count + 1;
        if (self.flipped == true) {
          console.log("regular animation stopped.")
          document.querySelector('#coin').classList.remove("heads")
          if (self.finalResult === 1) {
            document.querySelector('#coin').classList.add("heads2")
          } else{
            document.querySelector('#coin').classList.add("tails")
          }
          self.flipped = false
        }
      });
      },
    methods: {
      tossCoin() {
        let self = this
        if (self.flipping == true) {
          console.log("别着急嘛~")
          return
        } else{
          if (!self.userSeed){
            alert("你还没有输入随机种子")
            return
          } else {
            　var re = /(^[1-9]\d*$)/;
             console.log(re.test(self.userSeed))
             if(!re.test(self.userSeed)){
               swal("请输入正确的正整数",{icon: "warning"})
               return
             }
          }
          let choice = self.showHead ? 1:0
          self.$http.get(
            global.HOST + "/cointossing/begin?userseed="+self.userSeed
              +"&choice=" + choice + "&token=" + self.user.token
          ).then((res) => {
            // 添加出错提示
            console.log(res.body.server_seed)
            self.serverSeed = res.body.server_seed
            let arr = self.toBytesInt32(Number(res.body.server_seed))
            let ret = sha256(arr)
            console.log("===========")
            console.log(ret)
            console.log(self.serverSeedHash)
            if (ret === self.serverSeedHash) {
              let end = (res.body.server_seed ^ self.userSeed) & 1
              console.log("end is " + end)
              self.finalResult = end
            } else {
              // 错误提示 hash不一致
            }

            // 停止转动
            self.flipped = true;
            
          })
          
          self.flipping = true
          self.flipButton = "Flipping"
        }
        document.querySelector('#coin').classList.add("heads")
      },
      processTopping: function (selection) {
        if (selection == 2) {
          this.showHead = false
          this.showTail = true
        } else {
          this.showHead = true
          this.showTail = false
        }
      },
      toBytesInt32(num) {
        // an int32 takes 4 bytes
        let arr = new ArrayBuffer(4)
        let view = new DataView(arr)
        // byteOffset = 0, littleendian = false
        view.setUint32(0, num, false)
        return arr
      },
      beginNewRound() {
        let self = this
        // 清空userSeed
        self.userSeed = null
        var loader = new SVGLoader(document.getElementById('loader'), {
          speedIn: 300,
          easingIn: mina.easeinout
        });
        loader.show();
        console.log(self.user)
        self.$http.get(
          global.HOST + '/cointossing/newround?token=' + self.user.token
        ).then((res) => {
          console.log(res.body)
          self.serverSeedHash = res.body.server_seed_hash
          loader.hide()
        })
      },
      // 轮询保存结果
      saveResult(num) {
        let self = this
        let finished = false
        // 500ms发送一个
        let intervalCtx = setInterval(function () {
          self.$http.get(
            global.HOST + '/cointossing/isend?token=' + self.user.token
          ).then((res) => {
            console.log(res.body)
            finished = res.body.finish
          })
        }, 500)

        // 轮询检查是否记录结果完成，400ms设置小于500ms减少请求开销
        let stopIntervalCtx = setInterval(function () {
          if (finished === true) {
            clearInterval(intervalCtx)
            clearInterval(stopIntervalCtx)
            swal.stopLoading()
            swal.close();
            if (num === 1) {
              self.beginNewRound()
            } else {
              swal({
                text: "您的结果已保存成功！",
                icon: "success",
                buttons: "我知道了",
              }).then((value) => {
                self.$router.replace({path:'/gamelist'})
              });
            }
          }
        }, 400)
      }
    }
  } 
  </script>



<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
@import url('../assets/loading/css/component.css');

body{
  background: #E86152;
}

.title{
  font-size: 3em;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
  font-family: "Lato";
  text-align: center;
}

.option{
  font-size: 2.25em;
  font-weight: 500;
  color: #E86152;
  margin-top: 15%;
  text-transform: uppercase;
  font-family: "Lato";
  text-align: center;
}

#white{
  color: white;
}

.plus {
  position: absolute;
  left: 75%;
  top: 37.5%;
}

.random-seed{
  position: absolute;
  left: 90%;
  top: 40%;
  
}

.random-seed input {
  border-bottom: 1px solid #E64F3B;
  /* 去掉下划线 */
  outline:none;
  text-align: center;
  color: #E64F3B;
  font-family: "Lato";
  font-size: 2em;
  border-top:0px;
  border-left:0px;
  border-right:0px;
  BACKGROUND-COLOR: transparent;
  width: 400%;
}

.random-seed input::-webkit-input-placeholder{
    color:#E64F3B;
    font-size: 0.5em
}
.random-seed input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#E64F3B;
}
.random-seed input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#E64F3B;
}
.random-seed input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#E64F3B;
}

.box{
  position: relative;
  display: block;
  margin: auto;
  margin-top: 3%;
  width: 800px;
  height: 450px;
  background: white;
}
.left-container{
  position: absolute;
  height: 100%;
  width: 50%;
  left: 0%;
  background: #FDE4A7;
}
.right-container{
  position: absolute;
  height: 100%;
  width: 50%;
  right: 0%;
  background: #D15449;
}

.option-container{
position: absolute;
  width: 50%;
  height: 50%;
  top: 25%;
  left: 13%;
  /*z-index: 2;*/
  background: none;
}

.choice-preview{
  position: absolute;
  height: 40%;
  width: 45%;
  top: 30%;
  left: 17.5%;
  border-radius: 50%;
  background: #E64F3B;
  /*z-index: 2;*/
  /* 设置子DIV居中 */
  display:flex;
  justify-content:center;
  align-items:center;
}

.totalButton {
  /* 设置子DIV居中 */
  display:flex;
  justify-content:center;
  align-items:center;
}

.choice-preview .preview-text {
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: "Lato";
  padding: 15px 10px;
  width: 25%;
  color: #FDE4A7;
  text-align: center;
}

.pizza-div {
    height: 100%;
}

.pizza{
  position: absolute;
  height: 40%;
  width: 45%;
  top: 30%;
  left: 27.5%;
  border-radius: 50%;
  background: #FDE4A7;
  
  background-size: cover;
  z-index: 2;
  animation: flipHeads 3s infinite
}

#coin {
  position: relative;
  margin: 5% auto;
  width: 180px;
  height: 180px;
  cursor: pointer;
}
#coin div {
  width: 100%;
  height: 100%;
  -webkit-border-radius: 50%;
     -moz-border-radius: 50%;
          border-radius: 50%;
  -webkit-box-shadow: inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4);
     -moz-box-shadow: inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4);
          box-shadow: inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4);
}

.side-a {
  position: absolute;
  height: 40%;
  width: 45%;
  border-radius: 50%;
  background: #FDE4A7;
  background: url("../assets/US_One_Cent_Obv.png");
  background-size: cover;
}
.side-b {
  position: absolute;
  height: 40%;
  width: 45%;
  border-radius: 50%;
  background: #aaE4A7;
  transform: rotateY(-180deg);
  background: url("../assets/US_One_Cent_Rev.png");
  background-size: cover;
}

#coin {
  transition: -webkit-transform 1s ease-in;
  -webkit-transform-style: preserve-3d;
}
#coin div {
  position: absolute;
  -webkit-backface-visibility: hidden;
}
.side-a {
  z-index: 100;
}
.side-b {
  -webkit-transform: rotateY(-180deg);

}

.spin-pizza{
  animation: spinPizza 1s infinite;
  position: absolute;
  height: 40%;
  width: 45%;
  top: 30%;
  left: 27.5%;
  border-radius: 50%;
  background: #FDE4A7;
  z-index: 2;
}

.sauce{
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background: #E8796D;
  top: 10%;
  left: 10%;
  z-index: 3;
}

.cheese-1{
  position: absolute;
  background: white;
  border-radius: 50%;
  width: 25%;
  height: 25%;
  top: 15%;
  left: 20%;
  z-index: 5;
}

.cheese-2{
  position: absolute;
  background: white;
  border-radius: 50%;
  width: 25%;
  height: 25%;
  top: 65%;
  left: 40%;
  z-index: 5;
}

.cheese-3{
  position: absolute;
  background: white;
  border-radius: 50%;
  width: 25%;
  height: 25%;
  top: 35%;
  right: 15%;
  z-index: 5;
}

.string-cheese{
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: #FFD142;
  top: 5%;
  left: 5%;
  z-index: 4;
}

.pepperoni-1{
  position: absolute;
  background: #E64F3B;
  border-radius: 50%;
  width: 20%;
  height: 20%;
  top: 45%;
  left: 10%;
  z-index: 6;
}

.pepperoni-2{
  position: absolute;
  background: #E64F3B;
  border-radius: 50%;
  width: 20%;
  height: 20%;
  top: 55%;
  left: 65%;
  z-index: 6;
}

.pepperoni-3{
  position: absolute;
  background: #E64F3B;
  border-radius: 50%;
  width: 20%;
  height: 20%;
  top: 15%;
  right: 25%;
  z-index: 6;
}

.sauce-can{
  position: absolute;
  height: 80%;
  top: 10%;
  width: 70%;
  left: 15%;
  background: white;
}

.top-rim{
  position: absolute;
  top: 0%;
  width: 100%;
  height: 5%;
  background: #666666;
}

.bottom-rim{
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 5%;
  background: #666666;
}

.red-label{
  position: absolute;
  background: #E64F3B;
  height: 50%;
  top: 5%;
  width: 100%;
}

.badge{
  position: absolute;
  height: 25%;
  width: 30%;
  background: #FFD142;
  top: 40%;
  left: 35%;
  border-radius: 50%;
}

.yes-button{
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  left: 20%;
  background: #FFD142;
  color: #E64F3B;
  font-weight: 500;
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: "Lato";
  padding: 15px 10px;
  width: 25%;
  text-align: center;
}

.flip-button{
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  background: #FFD142;
  color: #E64F3B;
  font-weight: 500;
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: "Lato";
  padding: 15px 10px;
  width: 25%;
  text-align: center;
}

.no-button{
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  right: 20%;
  background: #E64F3B;
  color: #FFD142;
  font-weight: 500;
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: "Lato";
  padding: 15px 10px;
  width: 25%;
  text-align: center;
}

.shredded-cheese-wedge{
  position: absolute;
  background: #FFD142;
  height: 80%;
  width: 80%;
  top: 10%;
  left: 10%;
  -webkit-clip-path: polygon(100% 0, 0 0, 50% 100%);
clip-path: polygon(100% 0, 0 0, 50% 100%);
}

.wedge-circle-1{
  position: absolute;
  border-radius: 50%;
  background: #EABF3C;
  top: 15%;
  left: 25%;
  height: 11%;
  width: 12%;
}
.wedge-circle-2{
  position: absolute;
  border-radius: 50%;
  background: #EABF3C;
  top: 50%;
  left: 45%;
  height: 11%;
  width: 12%;
}

.wedge-circle-3{
  position: absolute;
  border-radius: 50%;
  background: #EABF3C;
  top: 10%;
  right: 25%;
  height: 11%;
  width: 12%;
}

.moz-wedge{
  position: absolute;
  border-radius: 50%;
  background: white;
  height: 75%;
  width: 80%;
  top: 12.5%;
  left: 10%;
}

.pep-option{
  position: absolute;
  border-radius: 50%;
  height: 45%;
  width: 50%;
  top: 27.5%;
  left: 25%;
  background: #E64F3B;
}

@keyframes spinPizza{
  0%{
    -webkit-transform: rotate(0deg); 
    transform: rotate(0deg);
  }
  
  25%{
    -webkit-transform: rotate(90deg); 
    transform: rotate(90deg);
  }
  
  50%{
    -webkit-transform: rotate(180deg); 
    transform: rotate(180deg);
  }
  
  75%{
    -webkit-transform: rotate(270deg); 
    transform: rotate(270deg);
  }
  
  100%{
    -webkit-transform: rotate(360deg); 
    transform: rotate(360deg);
  }
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

.flip {
    animation: flipHeads 3s ease-out forwards;
}

#coin.heads {
  -webkit-animation: flipHeads 3s ease-out infinite;
  -moz-animation: flipHeads 3s ease-out infinite;
    -o-animation: flipHeads 3s ease-out infinite;
       animation: flipHeads 3s linear infinite;
}

#coin.heads2 {
  -webkit-animation: flipHeads2 3s ease-out forwards;
  -moz-animation: flipHeads2 3s ease-out forwards;
    -o-animation: flipHeads2 3s ease-out forwards;
       animation: flipHeads2 3s ease-out forwards;
}

#coin.tails {
  -webkit-animation: flipTails 3s ease-out forwards;
  -moz-animation: flipTails 3s ease-out forwards;
    -o-animation: flipTails 3s ease-out forwards;
       animation: flipTails 3s ease-out forwards;
}

@keyframes flipIt {

  0%    { -webkit-transform:rotateY(360deg); }
  50%   { -webkit-transform:rotateY(180deg); }
  100%  { -webkit-transform:rotateY(0deg); }
}

@keyframes flipHeads {
  from { -webkit-transform: rotateY(0); -moz-transform: rotateY(0); transform: rotateY(0); }
  to { -webkit-transform: rotateY(1800deg); -moz-transform: rotateY(1800deg); transform: rotateY(1800deg); }
}
/*
记得要定义两个动画，否则addclass无效
*/
@keyframes flipHeads2 {
  from { -webkit-transform: rotateY(0); -moz-transform: rotateY(0); transform: rotateY(0); }
  to { -webkit-transform: rotateY(1800deg); -moz-transform: rotateY(1800deg); transform: rotateY(1800deg); }
}

@keyframes flipTails {
  from { -webkit-transform: rotateY(0); -moz-transform: rotateY(0); transform: rotateY(0); }
  to { -webkit-transform: rotateY(1980deg); -moz-transform: rotateY(1980deg); transform: rotateY(1980deg); }
}

</style>


