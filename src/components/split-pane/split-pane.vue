<template>
<div class="split-pane-wrap" ref="splitPaneWrap">
    <div class="pane pane-left" :style="{width:leftOffsetPercent}">
        <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" @mousedown="handleMousedown" :style="{left:triggerLeft,width:`${triggerWith}px`}"></div>
    <div class="pane pane-right" :style="{left:leftOffsetPercent, paddingLeft:`${triggerWith/2}px`}">
        <slot name="right"></slot>
    </div>
</div>
</template>

<script>
import {
    fail
} from 'assert';
export default {
    name: 'SplitPane',
    data() {
        return {
            // leftOffset: 0.3,
            canMove: false,
            initOffset: 0,
        }
    },
    props: {
        value: {
            type: Number,
            default: 0.5
        },
        triggerWith: {
            type: Number,
            default: 10
        },
        min: {
            type: Number,
            default: 0.1
        },
        max: {
            type: Number,
            default: 0.9
        }
    },
    computed: {
        leftOffsetPercent() {
            return `${this.value*100}%`
        },
        triggerLeft() {
            return `calc(${this.value*100}% - ${this.triggerWith/2}px)`
        }
    },
    methods: {
        handleMousedown(e) {
            document.addEventListener('mousemove', this.handleMousemove);
            document.addEventListener('mouseup', () => {
                this.canMove = false;
            })
            this.initOffset = e.pageX - e.srcElement.getBoundingClientRect().left
            this.canMove = true;
        },
        handleMousemove(e) {
            //处理鼠标移动时间
            //getBoundingClientRect 返回一个下对象，包含元素的大小和相对于视图的位置等
            if (!this.canMove) return

            const outerRect = this.$refs.splitPaneWrap.getBoundingClientRect();
            const offset = e.pageX - outerRect.left - this.initOffset + this.triggerWith / 2;
            let offsetPercent = offset / outerRect.width;
            if (offsetPercent < this.min) {
                offsetPercent = this.min

            }
            if (offsetPercent > this.max) {
                offsetPercent = this.max
            }
            this.$emit('update:value', offsetPercent);
            // this.value = offset / outerRect.width;
        }
    }
}
</script>

<style lang="less">
.split-pane-wrap {
    height: 100%;
    width: 100%;
    position: relative;

    .pane {
        height: 100%;
        position: absolute;
        top: 0;

        &-left {
            background: palevioletred;
        }

        &-right {
            right: 0;
            bottom: 0;
            background: paleturquoise;
        }

        &-trigger-con {
            // width: 10px;
            height: 100%;
            background: red;
            position: absolute;
            top: 0;
            z-index: 10;
            user-select: none;
        }
    }
}
</style>
