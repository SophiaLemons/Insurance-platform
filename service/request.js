const BASE_URL = "https://mock.apifox.cn/m1/1350781-0-default"
const TIMEOUT = 5000

class Request {
  request(url,method,data){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: BASE_URL + url,
        data: data,
        method: method,
        timeout: TIMEOUT,
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
  get(url,params){
    return this.request(url,"GET",params)
  }

  post(url,data){
    return this.request(url,"POST",data)
  }
}
const myRequest = new Request
export default myRequest