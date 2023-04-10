<template>
  <div>
    <div class="icon"  
    :style="'background-color:' + newColor">
    <img :src="Ficon" alt="" class="icon-img" >
    </div>
    
    <textarea class="input" 
              v-model="iname"
              maxlength='50' 
              placeholder="请输入习惯名称"
              ref="ipt"
              ></textarea>

    <!-- 挑选颜色图标开始 -->
    <div class="title1">
      <img src="../../../static/images/binggan-active.png" alt="" class="picicon">
      <p>挑选颜色和图标</p>

      <!-- 挑选部分 -->
      <div class="pickCI">

        <!-- 挑选颜色 -->
        <div class="color">
          <ui>
          <li class="colorpic" v-for="(item, index) in colorpicObj" :key="index" :class="{ active1: current1==item.id }" @click="doActive1(item)">
            <div class="cpic" :style="'background-color:' + item.color"></div>
          </li>
        </ui>

        </div>
        
        <!-- 挑选颜色结束 -->
        <!-- 挑选图标開始 -->
        <div class="img">
          <ui >
          <li class="iconpic" v-for="(item, index) in imgObj" :key="index" :class="{ active2: current2==item.id }" @click="doActive2(item)">
            <img :src="item.url" alt="" >
          </li>
        </ui>
        </div>
        
        <!-- 挑选图标结束 -->


        <!-- 选填项开始 -->

      </div>



    </div>

    <div class="title2">
      <p class="p1">————&nbsp;&nbsp;以下为选填项&nbsp;&nbsp;————</p>
      <img class="picicon" src="../../../static/images/binggan-active.png" alt="">
      <p class="p2">写一句激励自己的话</p>
      <textarea class="input2"
              v-model="text"
              maxlength='200' 
              placeholder="立身以学为先，立学以读为本。"
              ></textarea>

    </div>


    <!--提交保存  -->
    <div class="btn">
      <button @click="submit">保存</button>
    </div>





  </div>
</template>

<script>
import{post,showModel} from '@/util'

export default {
  data() {
    return {
      iname:"",
      name_count:0,
      text:"",
      current1: 1,
      current2: 1,
      newColor: "#E9967A",
      Ficon:require('../../../static/images/icon/icon (1).png'),
      colorpicObj:[
        {id:1 ,color:"#E9967A"},
        {id:2 ,color:"#FFEBCD"},
        {id:3 ,color:"#DFDF70"},
        {id:4 ,color:"#55AE3A"},
        {id:5 ,color:"#9AFF9A"},
        {id:6 ,color:"#00B2EE"},
        {id:7 ,color:"#FFBBFF"},
        {id:8 ,color:"#3300FF"},
        {id:9 ,color:"#1C86EE"},
        {id:10 ,color:"#8DB6CD"},
        {id:11,color:"#97FFFF"},
        {id:12,color:"#AEEEEE"}
      ],
      imgObj: [
        { id: 1, url:require('../../../static/images/icon/icon (1).png'), color: "#000" },
        { id: 2, url:require('../../../static/images/icon/icon (2).png'), color: "#000" },
        { id: 3, url:require('../../../static/images/icon/icon (3).png'), color: "#000" },
        { id: 4, url:require('../../../static/images/icon/icon (4).png'), color: "#000" },
        { id: 5, url:require('../../../static/images/icon/icon (5).png'), color: "#000" },
        { id: 6, url:require('../../../static/images/icon/icon (6).png'), color: "#000" },
        { id: 7, url:require('../../../static/images/icon/icon (7).png'), color: "#000" },
        { id: 8, url:require('../../../static/images/icon/icon (8).png'), color: "#000" },
        { id: 9, url:require('../../../static/images/icon/icon (9).png'), color: "#000" },
        { id: 10, url:require('../../../static/images/icon/icon (10).png'), color: "#000" },
        { id: 11, url:require('../../../static/images/icon/icon (11).png'), color: "#000" },
        { id: 12, url:require('../../../static/images/icon/icon (12).png'), color: "#000" },
        { id: 13, url:require('../../../static/images/icon/icon (13).png'), color: "#000" },
        { id: 14, url:require('../../../static/images/icon/icon (14).png'), color: "#000" },
        { id: 15, url:require('../../../static/images/icon/icon (15).png'), color: "#000" },
        { id: 16, url:require('../../../static/images/icon/icon (16).png'), color: "#000" },
        { id: 17, url:require('../../../static/images/icon/icon (17).png'), color: "#000" },
        { id: 18, url:require('../../../static/images/icon/icon (18).png'), color: "#000" },
        { id: 19, url:require('../../../static/images/icon/icon (19).png'), color: "#000" },
        { id: 20, url:require('../../../static/images/icon/icon (20).png'), color: "#000" },
        { id: 21, url:require('../../../static/images/icon/icon (21).png'), color: "#000" },
        { id: 22, url:require('../../../static/images/icon/icon (22).png'), color: "#000" },
        { id: 23, url:require('../../../static/images/icon/icon (23).png'), color: "#000" },
        { id: 24, url:require('../../../static/images/icon/icon (24).png'), color: "#000" },
        
      ]
    }
  },
  watch:{
    iname(){
      this.name_count =  this.iname.length
    }

  },
 





  methods: {
    doActive1(item) {
      console.log(item)
      this.current1 = item.id
      this.newColor = item.color
      // console.log("点击成功current,cur",that.current,that.cur,this)
    },
    doActive2(item) {
      console.log(item)
      this.current2 = item.id
      this.Ficon = item.url
      // console.log("点击成功current,cur",that.current,that.cur,this)
    },
    async submit(){
      if(this.name_count>0){
        const data = {
        openid:wx.getStorageSync('userinfo').openId,
        name:this.iname,
        color:this.newColor,
        src:this.Ficon,
        text:this.text
      }
      try{
        const res = await post('/weapp/addhabits',data)
        console.log("从后端返回正确的信息",res)
        showModel("提交成功","已经成功新建小习惯")
      }catch(e){
        console.log("从后端返回执行错误的信息是：",e)
        showModel("提交失败","服务器出了一些问题，请稍后再试~")
      }

      }else{
        showModel("提交失败","习惯名称不能为空")

      }
      
      
      
    }
    


  }

}


</script>

<style lang="scss" scoped  >
.icon {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 162.5px;
  margin-top: 10px;
  margin-bottom: 10px;
  // background-color: gray;
  // background-color:var(--color);
  .icon-img{
    height: 40px;
    width: 40px;
    margin-top: 5px;
    margin-left: 5px;
    // background-image:'../../../static/images/icon/icon (1).png' ;


  }

}

.activeIcon {
  background-color: red;



}

.input {
  margin-left: 35%;
  /* border: 1px solid; */
  background-color: rgb(242, 236, 236);
  height: 20px;
  width: 120px;
  border-radius: 3px;
  text-align: center;

}

.title1 {
  position: relative;
  top: 10px;

  .picicon {
    width: 20px;
    height: 20px;
    margin-left: 20px;
    position: absolute;


  }

  p {
    position: absolute;
    margin-left: 50px;

  }

  .pickCI {
    position: relative;
    top: 25px;
    width: 375px;
    height: 200px;

    // background-color: gray;
    .color {
      border-bottom: 1px solid gray;
      height: 200rpx;
      width: 750rpx;
      .colorpic {
        list-style-type: none;
        float: left;
        width: 30px;
        height: 30px;
        background-color: white;
        border-radius: 50%;
        margin-left: 20px;
        margin-top: 10px;
        text-align: center;
        border: 1px solid white;

        .cpic {
          margin-top: 5px;
          margin-left: 5px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      }
      .active1{
        border: 1px solid gray;
      }
      
    }
    .img{
      height: 500px;
      width: 750rpx;
      .iconpic{
        list-style-type: none;
        float: left;
        width: 30px;
        height: 30px;
        background-color: white;
        // border-radius: 50%;
        margin-left: 20px;
        margin-top: 10px;
        text-align: center;
        border: 1px solid white;

        img {
          margin-top: 5px;
          width: 20px;
          height: 20px;
          // border-radius: 50%;
        }
        
      }
      .active2{
        border:1px solid black ;
        background-color: bisque;
      }
      

    }
    
  }

}
.title2{
  // background-color:gray;
  position: relative;
  top: 150px;
  .p1{
    position: absolute;
    left: 70px;
    top: 5px;

  }
 
  .picicon {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 20px;
    top: 50px;


  }
  .p2 {
    position: absolute;
    left: 50px;
    top: 50px;

  }
  .input2{
    position: absolute;
    top: 80px;
    background-color:gainsboro;
    margin-left: 5px;
    width: 365px;
    height: 100px;
  }

}
.btn{
  position: relative;
  top: 300px;
  button{
    height: 40px;
    width: 370px;
    color: white;
    background-color: plum;
  }
}
</style>