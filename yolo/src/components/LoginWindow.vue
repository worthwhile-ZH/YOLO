<template>
  <div>
    <div class="modal-mask"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <img class="img" src="../../static/images/littleTip-huang.jpg" >
        <div class="content-text">
          <p class="key-bold">You Only Live Once</p>
          <p class="key-bold">记录习惯，享受美好生活</p>
          <p class="little-content">我的生活不曾取悦我，所以我创造了自己的生活</p>
          <p class="little-content">古之立大事者，不惟有超世之才，亦必有坚忍不拔之志</p>
        
        </div>

      </div>
      <div class="modal-footer">
        <button open-type="getUserInfo" lang="zh_CN" class="btn" @getuserinfo="login">授权登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config"
import qcloud from "wafer2-client-sdk"
//在util.js 里面暴露没加default  加了就不用{}
import {showSuccess} from "@/util"
export default {
    methods:{
        login(){
      // 设置登录地址
      qcloud.setLoginUrl(config.loginUrl);
      qcloud.login({
          success: userInfo => {
              console.log('登录成功', userInfo);
              this.loginSuccess(userInfo)
              this.$emit("changeShow",false,userInfo)
              wx.showTabBar()
              showSuccess("登录成功")
          },
          fail: err =>{
              console.log('登录失败', err);
          }
      });
    },
    loginSuccess(userInfo){
      //（key,value）value 不能加"" 否则会变成string
      wx.setStorageSync('userinfo',userInfo)


    }
    }

}
</script>

<style lang="scss">
 .modal-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}
.modal-dialog {
  box-sizing: border-box;
  width: 560rpx;
  overflow: hidden;
  position: fixed;
  top: 30%;
  left: 0;
  z-index: 9999;
  background: #fff;
  margin: -150rpx 95rpx;
  border-radius: 16rpx;
}
.modal-content {
  box-sizing: border-box;
  display: flex;
  padding: 0rpx 53rpx 50rpx 53rpx;
  font-size: 32rpx;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content-tip {
  text-align: center;
  font-size: 36rpx;
  color: #333333;
}
.content-text {
  height:130px;
  padding:10px 0px 50px 0px;
  font-size:14px;
}
.modal-footer {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e5e5e5;
  font-size: 16px;
  font-weight:bold;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background:#feb600;
}
button {
  width: 100%;
  background:#feb600;
  color:#FFFFFF;
  font-weight:bold;
}
.img {
  width: 280px;
  height:90px;
}
.little-tip {
  padding-top:15px;
  padding-bottom:3px;
  font-size: 14px;
  font-weight:bold;
  color: #feb600;
}
.little-content {
  padding-top:5px;
  font-size: 13px;
  color:#606060;
}
.key-bold {
  padding-top:5px;
  font-size: 14px;
  font-weight:bold;
}

</style>