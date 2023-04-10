<template>
  <div>
      <div class="topcontainer">
          <!-- 音乐播放 -->
          <div class="addmusic"></div>
          <!-- 计时 -->
          <div class="clockoption">
              <ul>
                  <li v-for="(item,index) in clockObj" :key="index" @click="changeBg(item)" :class="{active1:current==item.id}" >{{item.value}}</li>
              </ul>
          </div>
          <!-- 统计 -->
          <div class="statistics"></div>
      </div>
      <!-- 时钟 -->
      <div v-if="showClock==1">
        <clockone></clockone>
      </div>
      <div v-if="showClock==2">
        <clocktwo></clocktwo>
      </div>
      <div v-if="showClock==3">
        <clockthree></clockthree>
      </div>
      <!-- 时钟结束 -->

      <!-- 计时按钮 -->
      <div class="buttonContainer">
          <div v-if="clickbg==1">
            <button class="btnbegin" @click="begin">开始计时</button>
          </div>

          <div v-if="clickbg==2">
            <button class="btnpreserve">
                <p>保存</p>
            </button>
            <button class="btnpause">
                <p>暂停</p>
            </button>
            <p class="giveup" @click="giveup">放弃本次</p>
          </div>


      </div>



      
  </div>
</template>

<script>
import clockone from "@/components/clock/clockone"
import clocktwo from "@/components/clock/clocktwo"
import clockthree from "@/components/clock/clockthree"
import {showgiveup} from "@/util"





export default {
    components:{
    clockone,
    clocktwo,
    clockthree

},

    

    data(){
        return{
            clockObj:[
                {id:1,value:"正计时"},
                {id:2,value:"倒计时"},
                {id:3,value:"全屏钟"}

            ],
            current:1,
            showClock:1,
            clickbg:1

            

        }
    },
    methods:{
        
        changeBg(item){
            this.current=item.id
            this.showClock=item.id
            console.log(this.showClock)
            

        },
        begin(){
            this.clickbg=2
        },
        giveup(){
            showgiveup("放弃本次计时，数据将不会保存，确定放弃吗？")
            console.log(this.clickbg,"主页面的数据")
            console.log(showgiveup())
        },
        
    }

}
</script>

<style lang="scss" scoped>
.topcontainer{
    width: auto;
    height: 100rpx;
    // background-color: gray;
    position: relative;
    // 添加音乐
    .addmusic{
        width: 30px;
        height: 30px;
        background:url("../../../static/images/binggan-active.png") no-repeat ;
        position: absolute;


    }


    //  正计时、倒计时、全屏计时
    .clockoption{
        width: 200px;
        height: 30px;
        background-color: white;
        position: absolute;
        left: 87.5px;
        top: 10px;
        ul{
            margin-left: 23px;
            border-radius:2px ;
            li{
                float: left;
                border: 1px solid black;
            }
            .active1{
                background-color:black;
                color: white;
}
        }
    }


    // 统计
    .statistics{
        width: 30px;
        height: 30px;
        background:url("../../../static/images/binggan-active.png") no-repeat ;
        position: absolute;
        left: 345px;

    }
}
.buttonContainer{
    position: relative;
    top: 390px;

    .btnbegin{
        width: 150px;
        height: 40px;
        background-color: bisque;
        color: violet;

    }
    .btnpreserve{
        width: 60px;
        height: 60px;
        color: brown;
        border-radius:50% ;
        border: 1px solid brown;
        font-size: 10px;
        text-align: center;
        position: absolute;
        left: 70px;
        word-spacing: 1px;
        p{
            margin-top:15px ;
        }


    }
    .btnpause{
        width: 60px;
        height: 60px;
        color:gray;
        border-radius:50% ;
        border: 1px solid gray;
        font-size: 10px;
        text-align: center;
        position: absolute;
        left:250px;
        word-spacing: 1px;
        p{
            margin-top:15px ;
        }




    }
    .giveup{
        position: absolute;
        left: 170px;
        top: 60px;
        color: gray;
        font-size: 10px;

    }


}

</style>