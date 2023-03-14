<!--
 * @Description: 场景菜单
 * @Author: shenxh
 * @Date: 2023-03-14 16:48:37
 * @LastEditors: shenxh
 * @LastEditTime: 2023-03-14 18:57:01
-->

<template>
  <div class="scene-menu">
    <el-menu class="menu" default-active="0">
      <div class="menu-item-wrap">
        <el-menu-item
          class="menu-item"
          v-for="(item, index) in sceneList"
          :key="index"
          :index="index + ''"
          @contextmenu.prevent.native="onContextmenu($event, item, index)"
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

    // 删除场景
    delScene(itm, idx) {
      const { name = '' } = itm

      this.$confirm(`是否确认删除"${name}"?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.sceneList.splice(idx, 1)
          this.$message({
            type: 'success',
            message: '删除成功!',
          })

          this.$emit('del-scene', itm, this.sceneList)
        })
        .catch(() => {})
    },

    // 右键场景
    onContextmenu(event, itm, idx) {
      this.$contextmenu({
        items: [
          {
            label: '删除',
            onClick: () => this.delScene(itm, idx),
          },
        ],
        event,
        customClass: 'custom-class',
        zIndex: 3,
        minWidth: 50,
      })
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
