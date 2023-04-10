<template>
  <div class="container">

<div class="clock-container">
  <div class="flip-container">
    <div
    v-for="(unit,unitIndex) in timeArr" :key="unitIndex">
    <div v-if="unitIndex===1 || unitIndex===3">
      
    </div>
      <div class="flip-items">
        <div
        v-for="(item,index) in (unit.max+1)" :key="index">
          <div
          :class="['item',(unit.current==index)?'current':'',(unit.current-1==index||index==unit.max&&unit.current==0)?'past':'']"
            >
            <div class="up">
              <div class="inner">{{index}}</div>
              <div class="shadow"></div>
            </div>
            <div class="down">
              <div class="inner">{{index}}</div>
              <div class="shadow"></div>
            </div>
          </div>
        </div>
     </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      timeArr: [],
      timeStr: [],
      max: '',
      current: ''
    }
  },
  mounted () {
    this.setTimeRunner()
  },
  components: {

  },

  methods: {

    setTimeRunner () {
      this.timeRunner = setInterval(() => {
        this.getTimeStr()
        this.timeArr1()
      }, 1000)
    },

    getTimeStr () {
      var time = new Date()
      var hour = ('00' + time.getHours()).slice(-2)
      var minute = ('00' + time.getMinutes()).slice(-2)
      var second = ('00' + time.getSeconds()).slice(-2)
      var timeStr = (hour + minute + second).split('')
      this.timeStr = timeStr
    },

    timeArr1 () {
      var timeArr = this.timeStr.map((unit, index) => {
        var max
        // eslint-disable-next-line no-self-compare
        if (index & 1 === 1) {
          max = 9
        } else if (index === 0) {
          max = 2
        } else if (index === 2) {
          max = 5
        } else if (index === 4) {
          max = 5
        }
        var current = Number(unit)
        this.max = max
        this.current = current
        return {
          max: max,
          current: current
        }
      })
      // console.log(timeArr)
      this.timeArr = timeArr
    },

    beforeDestroy () {
      clearInterval(this.timeRunner)
    }

  }
} 
</script>

<style scoped lang="scss">
.container{
   margin-top:-100rpx ;
   width: 750rpx;
   height: 375rpx; 
   display: flex; 
   box-sizing: border-box; 
   left: NaNrpx; top: NaNrpx;
   .flip-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
            justify-content: center;
    padding: 0 20rpx;
    position: relative;
  }
  .flip-container .flip-items {
    position: relative;
    width: 90rpx;
    height: 145rpx;
    font-size: 128rpx;
    font-weight: bold;
    border-radius: 10rpx;
    border:1rpx solid rgba(121, 121, 121, 0.384);
    box-shadow: 0 2rpx 18rpx rgba(0,0,0,0.7);
  }
  .flip-container .flip-items:nth-of-type(2n+1) {
    margin-right: 12rpx;
  }
  .flip-container .flip-items:nth-of-type(2),
  .flip-container .flip-items:nth-of-type(4) {
    margin-right: 36rpx;
  }
  .flip-container .flip-items:nth-of-type(2)::after,
  .flip-container .flip-items:nth-of-type(4)::after,
  .flip-container .flip-items:nth-of-type(2)::before,
  .flip-container .flip-items:nth-of-type(4)::before {
    position: absolute;
    right: -18rpx;
    content: '';
    -webkit-transform: translateX(50%);
            transform: translateX(50%);
    width: 15rpx;
    height: 15rpx;
    border-radius: 50%;
    box-shadow:rgba(0, 0, 0, 0.7) 1px 1px 5px;
    background-color: rgba(0, 0, 0, 0.801);
  }
  .flip-container .flip-items:nth-of-type(2)::before,
  .flip-container .flip-items:nth-of-type(4)::before {
    top: 25%;
  }
  .flip-container .flip-items:nth-of-type(2)::after,
  .flip-container .flip-items:nth-of-type(4)::after {
    bottom: 25%;
  }
  .flip-container .flip-items .item {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-perspective: 300rpx;
            perspective: 300rpx;
  }
  .flip-container .flip-items .item:before {
    content: '';
    position: absolute;
    top: 72.5rpx;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 4rpx;
    min-height: 4rpx;
    background-color: rgba(0, 0, 0, 0.384);
  }
  .flip-container .flip-items .item .up,
  .flip-container .flip-items .item .down {
    position: absolute;
    left: 0;
    right: 0;
    height: 50%;
    overflow: hidden;
  }
  .flip-container .flip-items .item .up {
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    top: 0;
  }
  .flip-container .flip-items .item .down {
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    bottom: 0;
  }
  .flip-container .flip-items .item .inner {
    position: absolute;
    left: 0;
    width: 100%;
    height: 145rpx;
    line-height: 145rpx;
    color: #252525;
    text-shadow: 0 2rpx 4rpx rgb(0, 0, 0);
    text-align: center;
    background-color: #ffffff;
    border-radius: 10rpx;
  }
  .flip-container .flip-items .item .up .inner {
    top: 0;
  }
  .flip-container .flip-items .item .down .inner {
    bottom: 0;
  }
  .flip-container .flip-items .item .up .shadow {
    border-top-left-radius: 10rpx;
    border-top-right-radius: 10rpx;
  }
  .flip-container .flip-items .item .down .shadow {
    border-bottom-left-radius: 10rpx;
    border-bottom-right-radius: 10rpx;
  }
  .flip-container .flip-items .item.past {
    z-index: 3;
  }
  .flip-container .flip-items .item.current {
    -webkit-animation: highter-level 0.5s 0.5s linear forwards;
            animation: highter-level 0.5s 0.5s linear forwards;
    z-index: 2;
  }
  .flip-container .flip-items .item.past .up {
    -webkit-animation: flip-past-up 0.5s linear both;
            animation: flip-past-up 0.5s linear both;
  }
  .flip-container .flip-items .item.current .down {
    -webkit-animation: flip-current-down 0.5s 0.5s linear both;
            animation: flip-current-down 0.5s 0.5s linear both;
  }
  @-webkit-keyframes flip-current-down {
  from {
      -webkit-transform: rotateX(90deg);
              transform: rotateX(90deg);
  }
  to {
      -webkit-transform: rotateX(0deg);
              transform: rotateX(0deg);
  }
  }
  @keyframes flip-current-down {
  from {
      -webkit-transform: rotateX(90deg);
              transform: rotateX(90deg);
  }
  to {
      -webkit-transform: rotateX(0deg);
              transform: rotateX(0deg);
  }
  }
  @-webkit-keyframes flip-past-up {
  from {
      -webkit-transform: rotateX(0deg);
              transform: rotateX(0deg);
  }
  to {
      -webkit-transform: rotateX(-90deg);
              transform: rotateX(-90deg);
  }
  }
  @keyframes flip-past-up {
  from {
      -webkit-transform: rotateX(0deg);
              transform: rotateX(0deg);
  }
  to {
      -webkit-transform: rotateX(-90deg);
              transform: rotateX(-90deg);
  }
  }
  @-webkit-keyframes highter-level {
  from {
      z-index: 4;
  }
  to {
      z-index: 4;
  }
  }
  @keyframes highter-level {
  from {
      z-index: 4;
  }
  to {
      z-index: 4;
  }
  }
  .flip-container .flip-items .item .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .flip-container .flip-items .item.past .up .shadow {
    background: -webkit-linear-gradient(rgba(0,0,0,0.1) 0%, #000 100%);
    background: linear-gradient(rgba(0,0,0,0.1) 0%, #000 100%);
    -webkit-animation: show 0.5s linear both;
            animation: show 0.5s linear both;
  }
  .flip-container .flip-items .item.past .down .shadow {
    background: -webkit-linear-gradient(#000 0%, rgba(0,0,0,0.1) 100%);
    background: linear-gradient(#000 0%, rgba(0,0,0,0.1) 100%);
    -webkit-animation: show 0.5s linear both;
            animation: show 0.5s linear both;
  }
  .flip-container .flip-items .item.current .up .shadow {
    background: -webkit-linear-gradient(rgba(0,0,0,0.1) 0%, #000 100%);
    background: linear-gradient(rgba(0,0,0,0.1) 0%, #000 100%);
    -webkit-animation: hide 0.5s 0.3s linear both;
            animation: hide 0.5s 0.3s linear both;
  }
  .flip-container .flip-items .item.current .down .shadow {
    background: -webkit-linear-gradient(#000 0%, rgba(0,0,0,0.1) 100%);
    background: linear-gradient(#000 0%, rgba(0,0,0,0.1) 100%);
    -webkit-animation: hide 0.5s 0.3s linear both;
            animation: hide 0.5s 0.3s linear both;
  }
  @-webkit-keyframes show {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
  }
  @keyframes show {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
  }
  @-webkit-keyframes hide {
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
  }
  @keyframes hide {
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
  }
  .other {
    position: absolute;
    font-size: 26px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    bottom: 50rpx;
  }
}
  
</style>
