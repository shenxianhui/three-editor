<!--
 * @Description: Three 编辑器
 * @Author: shenxh
 * @Date: 2023-03-14 15:10:22
 * @LastEditors: shenxh
 * @LastEditTime: 2023-03-14 15:52:40
-->

<template>
  <div class="three-editor">
    <div class="three-editor-wrap">
      <base-header class="header"></base-header>
      <div class="content-wrap">
        <aside-left class="aside"></aside-left>
        <base-content class="content"></base-content>
        <aside-right class="aside"></aside-right>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from './components/base-header.vue'
import BaseContent from './components/base-content.vue'
import AsideLeft from './components/aside-left.vue'
import AsideRight from './components/aside-right.vue'

export default {
  name: 'three-editor',
  components: {
    BaseHeader,
    BaseContent,
    AsideLeft,
    AsideRight,
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
.three-editor {
  width: 100%;
  height: 100%;
  .three-editor-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .content-wrap {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      .aside {
        flex-shrink: 0;
      }
      .content {
        flex-grow: 1;
      }
    }
  }
}
</style>
