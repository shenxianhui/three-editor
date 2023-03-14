<!--
 * @Description: 头部
 * @Author: shenxh
 * @Date: 2023-03-14 15:36:17
 * @LastEditors: shenxh
 * @LastEditTime: 2023-03-14 15:55:15
-->

<template>
  <div class="base-header">
    <div class="base-header-left">1</div>
    <div class="base-header-right">2</div>
  </div>
</template>

<script>
export default {
  name: 'base-header',
  components: {},
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
.base-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 50px;
  border-bottom: 1px solid #eef2f8;
}
</style>
