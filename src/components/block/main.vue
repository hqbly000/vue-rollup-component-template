<template>
  <div class="i-block-item">
    <!-- <div class="i-block-close" @click="handleClick">X</div> -->
    <div class="i-blcok-content">
      <div v-if="type == 'text'">
        <el-input v-model="val" placeholder="请输入内容"></el-input>
      </div>
      <div v-else-if="type == 'expr'">
         <el-button circle>{{val}}</el-button>
      </div>
      <div v-else-if="type == 'select'">
        <el-select v-model="val" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "utils/util";

export default {
  name: "IBlock",
  props: {
    type: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => [],
    },
  },

  data() {
    return {
      val: "",
    };
  },
  methods: {
    handleClick(){
      console.log(`close`)
    }
  },
};
</script>

<style lang="scss" scoped>
.i-block-item {
  position: relative;
  width : 200px;
  height: 50px;
  // .i-block-close {
  //   position: absolute;
  //   right: -5px;
  //   top: -5px;
  //   width: 10px;
  //   height: 10px;
  //   line-height: 10px;
  //   text-align: center;
  //   z-index: 1001;
  // }
  // .i-blcok-content {
  //   position: absolute;
  //    z-index: 1000;
  // }
}
</style>
