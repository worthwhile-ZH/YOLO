const {mysql} = require("../qcloud")

module.exports = async(ctx)=>{
    const {openid,name,color,src,text} = ctx.request.body
    console.log("=====openid",openid)
    console.log("=====name",name)
    console.log("=====color",color)
    console.log("=====src",src)
    console.log("=====text",text)


    try{
        await mysql('habitssubmit').insert({
            openid,name,color,src,text
        })
        //向前端传递数据
        ctx.state.data = {
            code:0,
            msg:"success"
        }
         console.log("添加习惯执行成功")
    }catch(e){
        ctx.state = {
            code:-1,
            data:{
                msg:"添加失败"+e.sqlMessage
            }
        }
        console.log("添加错误")
    }
}
