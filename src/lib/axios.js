import axios from 'axios';
import { baseURL } from '@/config'
import { getToken } from './util';
class HttpRequset {
    constructor (baseUrl = baseURL){
        this.baseUrl = baseUrl;
        this.queue ={};
    }
    getInsideConfig(){
        //类内部的配置
        const config ={
            baseUrl:this.baseUrl,
            header:{

            }
        }
        return config
    }
    request(options){
        //创建请求,options 是实例的配置
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(),options);
        this.interceptors(instance,options.url);
        return instance(options);
    }
    //拦截器
    interceptors(instance,url){
        //请求拦截器
        instance.interceptors.request.use(config =>{
            //添加一个全局的loading
            //Loading.show()
            // console.log(config,"config")
            if(!Object.keys(this.queue).length){
                //loading
            }
            // 每次请求，将请求地址放入队列中
            this.queue[url] = true;
            

            //给请求头部设置anthorization
            config.header["Anthorization"] = getToken();
            return config
        },err =>{
            return Promise.reject(err)
        })
        //响应拦截器
        instance.interceptors.response.use(res =>{
            // console.log(res,'res');
            this.queue[url] = true;

            return res;
        },err =>{
            this.queue[url] = true;

            return Promise.reject(err)
        })
    }
}
export default HttpRequset