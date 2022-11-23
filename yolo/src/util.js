import config from './config'

export function showSuccess(text){
    wx.showToast({
        title: text,
        icon: 'success',
        duration: 2000
      })

}

export function showModel (title,content){
    wx.showModal({
        title: title,
        content: content,
        showCancel:false
        // success (res) {
        //   if (res.confirm) {
        //     console.log('用户点击确定')
        //   } else if (res.cancel) {
        //     console.log('用户点击取消')
        //   }
        // }
      })
}

function request(url,method,data){
  return new Promise(
    (resolve,reject) => {
      wx.request({
        url:config.host+url,
        method:method,
        data:data,
        success:function(res){
          console.log("请求成功，在前端打印的信息",res)
          if(res.data.code == 0){
            //pending变成resolve
            resolve(res.data.data)
          }else{
            //pending变成reject
            reject(res.data)
          }
        }
      })
    }
  )

}

export function get(url,data){
  return request(url,"GET",data)

}

export function post(url,data){
  return request(url,"POST",data)

}