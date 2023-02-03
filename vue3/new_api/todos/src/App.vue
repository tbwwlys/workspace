<template>
<div>
  <h2 @click="add" class="red">{{count}}=====</h2>
</div>
</template>
<script setup>
import { count } from 'vue'
let count = ref(1)
function add() {
  count++
}
</script>
<style>
  .red {
    color: red;
  }
</style>