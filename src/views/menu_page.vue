<template>
<div class="menu-box">
    <a-menu>
        <a-menu-item>
            11111
        </a-menu-item>
        <a-menu-item>2222</a-menu-item>
        <a-submenu>
            <div slot="title">3333</div>
            <a-menu-item>3333-11</a-menu-item>
            <a-menu-item>3333-22</a-menu-item>
        </a-submenu>
    </a-menu>
</div>
</template>

<script>
// import menuComponents from '_c/menu'
import {
    AMenu,
    AMenuItem,
    ASubmenu
} from '_c/menu'
export default {
    name: 'menu_page',
    data() {
        return {}
    },
    components: {
        // ...menuComponents
        AMenu,
        AMenuItem,
        ASubmenu
    }
}
</script>

<style lang="less">
.menu-box {
    width: 400px;
    height: 400px;
}
</style>
