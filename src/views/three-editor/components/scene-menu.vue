<!--
 * @Description: 场景菜单
 * @Author: shenxh
 * @Date: 2023-03-14 16:48:37
 * @LastEditors: shenxh
 * @LastEditTime: 2023-03-15 09:31:00
-->

<template>
  <div class="scene-menu" ref="test">
    <el-menu class="menu" default-active="0">
      <div class="menu-item-wrap">
        <el-menu-item
          class="menu-item"
          v-for="(item, index) in sceneList"
          :key="index"
          :index="index + ''"
          :title="item.name"
          @contextmenu.native.prevent="onContextmenu($event, item, index)"
        >
          <div class="menu-item-group">
            <i class="el-icon-menu"></i>
            <span
              v-if="!item.isRename"
              class="scene-name text-ellipsis"
              slot="title"
            >
              {{ item.name }}
            </span>
            <el-input
              v-else
              class="rename-input"
              :ref="'input' + index"
              v-model="item.name"
              autofocus
              @blur="item.isRename = false"
              @click.native.stop
            ></el-input>
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
        name: `场景${++num}`, // 场景名称
        isRename: false, // 场景重命名
      }

      this.sceneList.push(scene)

      this.$emit('add-scene', scene, this.sceneList)
    },

    // 删除场景
    delScene(itm, idx) {
      const { name = '' } = itm

      this.$confirm(`确认删除"${name}"?`, '提示', {
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

    // 重命名场景
    renameScene(itm, idx) {
      itm.isRename = true

      this.$nextTick(() => {
        const inputRef = this.$refs['input' + idx]

        if (inputRef && inputRef.length) {
          inputRef[0].focus()
        }
      })
    },

    // 右键场景
    onContextmenu(event, itm, idx) {
      this.$contextmenu({
        items: [
          {
            label: '重命名',
            onClick: () => this.renameScene(itm, idx),
          },
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
  :deep(.menu) {
    width: 80px;
    height: 100%;
    .menu-item-wrap {
      max-height: calc(100% - 60px);
      overflow: auto;
      .menu-item {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: normal;
        padding: 0 10px !important;
        .menu-item-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          .el-icon-menu {
            margin: 0;
          }
          .scene-name {
            text-align: center;
            line-height: normal;
            width: 60px;
            margin-top: 5px;
          }
          .rename-input {
            height: 20px;
            margin-top: 5px;
            .el-input__inner {
              text-align: center;
              height: 100%;
              padding: 0;
            }
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
