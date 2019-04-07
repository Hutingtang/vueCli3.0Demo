<template>
<div>
    <span :id="eleId"></span>
</div>
</template>

<script>
import CountUp from 'countup'
import { setTimeout } from 'timers'
export default {
    name: 'CountTo',
    data() {
        return {
            counter: {},
        }
    },
    computed: {
        eleId() {
            return `count_up_${this._uid}`
        }
    },
    props: {
        /**
         * @description 起始值
         *  */
        startVal: {
            type: [Number],
            default: 0
        },
        /**
         * @description 终止值 必填项
         * 
         */
        endVal: {
            type: Number,
            required: true,
            default: 0
        },
        /**
         * @description 开始延迟时间
         */
        delay:{
            type:Number,
            default:0
        }
    },
    mounted() {
        //dom渲染完成
        this.$nextTick(() => {
            this.counter = new CountUp(this.eleId, this.endVal, {
                startVal: this.startVal,
                useEasing: true,
                separator: ','
            });
        })
        setTimeout(()=>{
            this.counter.start();
        },this.delay)
    }
}
</script>

<style>
</style>
