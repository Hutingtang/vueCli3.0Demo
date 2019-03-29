export const saveInLocal = (store) => {
    //实例初始化时调用
    console.log(store,"state初始化")
    if(localStorage.state){
        store.replaceState(JSON.parse(localStorage.state))
    }
    store.subscribe((mutation,state) =>{
        console.log('mutations 被调用了')
        localStorage.setItem('state',JSON.stringify(state));
    })//每次调用mutation时调用
}
