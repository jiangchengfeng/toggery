// 封装axios
import axios from 'axios'


export function request(config) {
  // 1创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2 axios的拦截器interceptors
  instance.interceptors.request.use(config=>{
    return config// 拦截之后要返回
  },err=>{
    // console.log(err)
  })
  instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data
  },err=>{
    console.log(err);
  })
  // 3发送真正的网络请求
  return instance(config)
}