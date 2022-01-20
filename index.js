
const userAgents = require("./userAgent")
const request = require("request")



 function req() {
 const userAgent = userAgents[parseInt(Math.random() * userAgents.length)]
 const headers = {//设置请求头
        "content-type": "application/json",
        'User-Agent': userAgent
    }
  request.get('https://juejin.cn/post/7054880331094032397',{headers} ,function (err, response, body) {
    // console.log("res",res);
    console.log("err",err)

    

    
  /*
    response 响应信息的集合
  */

  if (!err && response.statusCode == 200) { 
    // console.log("response",response)
  }
})
}


setInterval(()=>{req()},1000)