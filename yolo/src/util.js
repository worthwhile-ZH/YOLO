export function showSuccess(text){
    wx.showToast({
        title: text,
        icon: 'success',
        duration: 2000
      })

}

export function showModal (title,content){
    wx.showModal({
        title: 'title',
        content: 'content',
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