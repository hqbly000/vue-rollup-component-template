<template>
  <div id="app">
      <draggable v-model="arr" @start="onStart" @end="onEnd" chosen-class="chosen" class="drag">
        <div v-for="element in arr" :key="element.id" >
            <i-block
            :type="element.type"
            :options="options"
          ></i-block>
        </div>
      </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "app",
  components: {
    draggable,
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      arr: [
        { id: 0, type: "text" },
        { id: 1, type: "select" },
        { id: 2, type: "expr" },
        { id: 3, type: "text" },
        { id: 4, type: "text" },
        { id: 5, type: "text" },
        { id: 6, type: "text" },
        { id: 7, type: "text" },
      ],
    };
  },
  methods:{
    onStart(){
      console.log("start...")
    },
    onEnd(){
      console.log("end...")
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.drag {
  width: 500px;
  display: flex;
  align-content: flex-start;
}

</style>
