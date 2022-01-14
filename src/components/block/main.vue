<template>
  <div>
    <slot/>
    <span> {{date}} </span>
    <el-badge :value="12" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
  </div>
</template>

<script>
import { formatDate } from 'utils/util';

export default {  
  name: 'IBlock',
   data() {
    return {
      date: formatDate(new Date())
    }
  }
}
</script>

<style scoped>

</style>

