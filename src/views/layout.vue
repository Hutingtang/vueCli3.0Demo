<template>
<div class="layout-wrapper">
    <Layout class="layout-outer">
        <Sider></Sider>
        <Layout>
            <Header></Header>
            <Content></Content>
        </Layout>
    </Layout>
</div>
</template>

<script>
export default {
    name: "layout",
    data() {
        return {}
    },
}
</script>

<style>
    .layout-wrapper,.layout-outer{
        height: 100%;
    }
</style>
