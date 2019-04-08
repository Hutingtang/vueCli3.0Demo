<template>
<div>
    <list :list='itemArr' :style="{color:'red'}" :render='renderFunc'>
        <!-- <i slot-scope="name" :name ='name.name'></i> -->
        <i slot="itemName"></i>
    </list>
</div>
</template>

<script>
import List from '_c/list'
import AInput from '_c/AInput'
export default {
    data() {
        return {
            itemArr:[
                {name:'123'},
                {name:'123'},
                {name:'123'},
            ]
        }
    },
    components:{
        List,
    },
    methods:{
        //使用render方式，渲染函数式组件
        // renderFunc(h,name){
        //     return h('i',{
        //         style:{
        //             color:'red'
        //         }
        //     },name)
        // }
        //使用jsx渲染组件,在render里面渲染的组件不需要在components里注册 ‘on-’调用自定义时间，‘nativeOn-’ 调用原生时间
        renderFunc(h,name){
            return(
                <i on-click={this.handleClick} style={{color:'blue'}}>{name}</i>
                //渲染组件
                // <a-input></a-input>
            )
        },
        handleClick(e){
            console.log(e,"event")
        }
    }
}
</script>

<style>
</style>
