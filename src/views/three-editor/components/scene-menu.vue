<!--
 * @Description: 场景菜单
 * @Author: shenxh
 * @Date: 2023-03-14 16:48:37
 * @LastEditors: shenxh
 * @LastEditTime: 2023-03-14 16:57:22
-->

<template>
  <div class="scene-menu">
    <el-menu class="menu" :default-active="0">
      <div class="menu-item-wrap">
        <el-menu-item
          class="menu-item"
          v-for="(item, index) in sceneList"
          :key="index"
          :index="index"
        >
          <div class="menu-item-group">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.name }}</span>
          </div>
        </el-menu-item>
      </div>
      <div class="add-btn">
        <el-button
          class="button"
          circle
          icon="el-icon-plus"
          size="mini"
          title="添加场景"
          @click="addScene"
        ></el-button>
      </div>
    </el-menu>
  </div>
</template>

<script>
let num = 0

export default {
  name: 'scene-menu',
  components: {},
  props: {},
  data() {
    return {
      sceneList: [],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    // 添加场景
    addScene() {
      const scene = {
        name: `场景${++num}`,
      }

      this.sceneList.push(scene)
      this.$emit('add-scene', scene, this.sceneList)
    },
  },
}
</script>

<style lang="less" scoped>
.scene-menu {
  height: 100%;
  .menu {
    width: 80px;
    height: 100%;
    .menu-item-wrap {
      max-height: calc(100% - 60px);
      overflow: auto;
      .menu-item {
        display: flex;
        align-items: center;
        justify-content: center;
        .menu-item-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          span {
            line-height: 1;
            margin-top: 5px;
          }
        }
      }
    }
    .add-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }
  }
}
</style>
