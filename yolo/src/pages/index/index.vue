<template>
  <div>
    <div v-if="showLogin">
      <LoginWindow @changeShow="getModel(arguments)"></LoginWindow>
    </div>
    
    <div class="show">
      <div class="mark-text">当前积分</div>
      <div class="mark">{{mark}}</div>
    </div>
    <div class="row">
      <div class="button right" @click="addMark(1)">+1</div>
      <div class="button left" @click="addMark(-1)">-1</div>
    </div>

    <div class="row">
      <div class="button right" @click="addMark(5)">+5</div>
      <div class="button left" @click="addMark(-5)">-5</div>
    </div>

  </div>
</template>

<script>
import LoginWindow from "@/components/LoginWindow"
import {showSuccess,showModel,post,get} from "@/util"
export default {
  components:{
    LoginWindow

  },
  data(){
    return{
      mark:0,
      userinfo:{},
      showLogin:false
    }
  },
  methods:{
    async addMark(add){
      //请求后端语句
      try{
        const data = {
        openid:this.userinfo.openId,
        add:add
      }
      const res = await post('/weapp/createrecord',data)

      this.mark = this.mark + add
      }catch(e){
        showModel("请求失败","请重试哦")
        console.log("从后端返回的执行错误信息是：",e)
      }

    },
    getModel(val){
      this.showLogin = val[0]
      this.userinfo = val[1]
      this.getCurrentMark()

    },
    async getCurrentMark(){
      try{
        const res = await get('/weapp/getmark',{openid:this.userinfo.openId})
        console.log("从后端传过来的分数：",res)
        this.mark = res.mark

      }catch(e){
        showModel("请求失败","请下拉页面刷新重试")
        console.log("从后端返回的执行错误信息是：",e)
      }
    }

   
  },
  mounted(){
    const userinfo = wx.getStorageSync('userinfo')
    if(userinfo.openId){
      this.userinfo = userinfo
    }else{
      wx.hideTabBar()
      this.showLogin = true
    }

  },
  onShow(){
    this.getCurrentMark()

  }
  

}
</script>

<style lang="scss">
.show{
  text-align: center;
  height: 266px;
  background: #ea5149;
  margin-bottom: 5px;
  color: #ffffff;
  font-weight: bold;
  .mark-text{
    font-size: 20px;
    padding: 28px;
  }
  .mark{
    font-size: 88px;
  }
}
  .row{ margin: 40px 56px;
  .button{ width: 70px;
  height: 70px;
  line-height:70px;
  border-radius: 20%;
  border: none;
  text-align:center;
  font-size: 25px;
  color:#FFFFFF;
  font-weight:bold;
  }
  }.right{ background:#EA5149;
  float: right;
  }.left{ background:#feb600;
  margin-right:80px;
  }






 

</style>
