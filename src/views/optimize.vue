<template>
<div>
    <Select v-model="model1" style="width:200px">
        <virtual-list :size='30' :remain="10">
            <Option v-for="(item,index) in cityList" :value="item.value" :key='`city_${index}`'>
            {{ item.value }}
            </Option>
        </virtual-list>
    </Select>
</div>
</template>

<script>
import VirtualList from 'vue-virtual-scroll-list'
export default {
    name: 'optimize',
    data() {
        return {
            model1: '', //所选的数据
            cityList: []
        }
    },
    components: {
        VirtualList
    },
    mounted() {
        this.initData();
    },
    methods: {
        initData() {
            for (let i = 0; i < 9999; i++) {
                this.cityList.push({
                    value: `city${i}`
                })
            }
        }
    }
}
</script>

<style>
</style>
