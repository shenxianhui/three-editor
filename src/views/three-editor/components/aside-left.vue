<!--
 * @Description: 左侧容器
 * @Author: shenxh
 * @Date: 2023-03-14 15:37:15
 * @LastEditors: shenxh
 * @LastEditTime: 2023-03-14 16:51:01
-->

<template>
  <div class="aside-left">
    <!-- 场景侧边栏 -->
    <scene-menu></scene-menu>
  </div>
</template>

<script>
import SceneMenu from './scene-menu.vue'

export default {
  name: 'aside-left',
  components: {
    SceneMenu,
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
}
</script>

<style lang="less" scoped>
.aside-left {
  height: 100%;
}
</style>
