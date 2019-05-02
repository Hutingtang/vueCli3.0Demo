<!--
 * @Description: 
 * @Author: Tang
 * @Date: 2019-04-09 19:42:52
 * @LastEditTime: 2019-05-02 10:16:54
 -->
<template>
<ul class="a-submenu">
    <div class="a-submenu-title" @click="toggleChild()">
        <slot name="title"></slot>
        <sapn class="shrink-icon" :style="{transform:`rotateZ(${showChild? 0 :180}deg)`}">^</sapn>
    </div>
    <div v-if="showChild" class="a-submenu-child-box">
        <slot></slot>
    </div>
</ul>
</template>

<script>
export default {
    name: 'ASubmenu',
    data() {
        return {
            showChild: false,
        }
    },
    methods: {
        /**
         * @description:子菜单的显隐；
         * @param {type} 
         * @return {null}
         */
        toggleChild() {
            let self = this;
            self.showChild = !self.showChild;
        }
    }
}
</script>

<style lang="less">
.a-submenu {
    &-title {
        background: red;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        position: relative;

        .shrink-icon {
            position: absolute;
            top: 2px;
            right: 0;
        }
    }

    &-child-box {
        overflow: hidden;

    }
}
</style>
