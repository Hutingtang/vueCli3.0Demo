export const getAppName = () =>{
    return new Promise((resolve,reject)=>{
        const err = null;
        setTimeout(()=>{
            //模拟异步请求
            if (!err) {
                resolve({code:200,info:{appName:"PromiseAppName"}})
            } else {
                reject(err)
            }
        },1000)
    })
}